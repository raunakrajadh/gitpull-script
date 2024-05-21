# To setup
- This project is meant to run on a remote server where you can listen to git pull updates and update your local directory with latest changes
- using `nodemon` you can also allow this script to auto pull changes and restart the server

inside `webhook-handler.js`
edit:
```js
const projectDir = "C:\\Users\\letbyte\\Desktop\\xybercupid";
```
to your own project directory, use `\\` instead of `\` to prevent error.

> Go to your GitHub repository.
> Navigate to "Settings" > "Webhooks" > "Add webhook".
> Set the "Payload URL" to your server's address (e.g., http://your-server-ip:4000/webhook).
> Set "Content type" to application/json.
> Select "Just the push event".
> Click "Add webhook".
