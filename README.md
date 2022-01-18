# yawhn

Put computer to sleep via a web interface (Ubuntu Linux)

# Running as a service with PM2

Following the [instructions from Digital Ocean tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04), you can run the express app as a service in Ubuntu.

In short, can start the server with:

`pm2 start www`

(`www` is the name taken automatically when registering the Express server with PM2)
