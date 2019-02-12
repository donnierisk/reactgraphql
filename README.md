## To run the client + server

In the project directory after installing node modules, you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The server runs on port 4000 locally.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Notes

The app uses styled components and has basic mobile-responsiveness integrated. It's quick to set up and uses similar syntax to sass, no need for CSS backwards compatibility due to it being JS that is transpiled to work with older browsers.

Apollo was used on the client side for the remote state (great for interacting with graphql) and redux is used locally to choose which currency is selected.
