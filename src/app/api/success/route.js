import { NextResponse } from 'next/server'

export const POST = async (req, res) => {
  const data = await req.json()

  console.log(data)

  return new NextResponse(
    JSON.stringify({
      data: data
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
