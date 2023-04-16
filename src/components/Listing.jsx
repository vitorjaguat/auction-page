export default function Listing({ id }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div
            data-widget='m-layout-complete-listing'
            // data-grant-type='signature'
            // data-client-id=${process.env.NEXT_PUBLIC_CLIENT_ID} 
            // data-app-name=${process.env.NEXT_PUBLIC_AUCTION_PAGE}  
            data-network='1'
            data-id=${id}
          ></div>`,
      }}
    />
  );
}
