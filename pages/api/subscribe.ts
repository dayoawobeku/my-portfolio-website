import type {NextApiRequest, NextApiResponse} from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

const audienceId: string =
  process.env.MAILCHIMP_AUDIENCE_ID !== undefined
    ? process.env.MAILCHIMP_AUDIENCE_ID
    : '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {email} = req.body;

  if (!email) {
    return res.status(400).json({error: 'Email is required'});
  }

  try {
    await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: req.body.firstName,
      },
    });

    return res.status(201).json({error: ''});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response.body.title === 'Member Exists') {
      return res.status(200).json({error: 'Already subscribed.'});
    }
    return res.status(500).json({error: error.message || error.toString()});
  }
}
