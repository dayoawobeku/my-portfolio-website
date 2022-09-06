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
      // eslint-disable-next-line camelcase
      email_address: email,
      status: 'subscribed',
    });

    return res.status(201).json({error: ''});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: string | any) {
    return res.status(500).json({error: error.message || error.toString()});
  }
}
