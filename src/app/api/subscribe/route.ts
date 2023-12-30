export async function POST(req: Request) {
  const url = `https://us8.api.mailchimp.com/3.0/lists/40609558ec/members`;
  const base64ApiKey = Buffer.from(`anystring:${"9ed64fa014707dd743126fb42c7707e5"}`).toString("base64");
  const body = await req.json();
  // console.log(body);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${base64ApiKey}`,
    },
    body: JSON.stringify({ email_address: body.email, status: "subscribed" }),
  })
 
  const data = await res.json()
 
  return Response.json(data)
}