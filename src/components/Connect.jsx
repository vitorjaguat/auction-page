export default function Connect() {
  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `<div
      data-widget='m-connect'
      data-grant-type='signature'
      data-client-id=${process.env.NEXT_PUBLIC_CLIENT_ID} 
      data-app-name=${process.env.NEXT_PUBLIC_AUCTION_PAGE} 
      data-network='1'
    ></div>`,
        }}
      />
    </div>
  );
}
