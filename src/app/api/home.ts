

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function GET() {
  return new Response(JSON.stringify([{ id: "1" }, { id: "2" }]), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
