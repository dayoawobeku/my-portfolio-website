export async function getCloudinaryImages() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET,
        ).toString('base64')}`,
      },
    },
  ).then(res => res.json());
  console.log(typeof results, 'what tiy');
  return results;
}

export function mapImageResources(resources: Array<object>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return resources.map((resource: any) => {
    const {width, height} = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      url: resource.secure_url,
      width,
      height,
    };
  });
}
