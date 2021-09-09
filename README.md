# Aiza NFT React UI Lib
* The components allow to render NFT auctions, bids and other marketplace information.
* `@htsoft/reactjs-hooks` is peer dependency that help to fetch NFT data.
<br/>  

## Evironment: 
* NodeJS version >= `v14.17.5`
<br/>  

## How to use this lib
1. Install package:
    ```bash
    yarn add @htsoft/aiza-react-ui
    ```

1. Render a NFT Preview:
    ```tsx
    import { NFTPreview } from "@htsoft/aiza-react-ui";

    export const Page = () => <NFTPreview id="88" />;
    ```

1. Render a list of auctions
    ```tsx
    import { NFTFullPage } from "@htsoft/aiza-react-ui";

    export const Page = ({curatorId}: {curatorId: string}) => (
        <AuctionHouseList
          onClick={(_, auction) => alert(`onClick event: ${auction.tokenId}`)}
          curatorIds={[curatorId]}
        />
    );
    ```
