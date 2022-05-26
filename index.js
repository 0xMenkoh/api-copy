const Axios = require("axios").default;

const axios = Axios.create({
    headers: {
        post: {
            Via: "Aiden"
        },
        get: {
            Via: "Aiden"
        },
        patch: {
            Via: "Aiden"
        },
        delete: {
            Via: "Aiden"
        }
    }
})

const express = require("express");
const rateLimit = require("express-rate-limit");
const MongoStore = require('rate-limit-mongo');

require("dotenv").config();

const app = express();

console.log(process.env);

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
             <!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>SuperFurryCDN</title>

	<link rel="icon" type="image/png" href="/assets/favicon.png" />

	<style>
		body {
			background-color: #ea899a;
			background: linear-gradient(140deg, #ea899a, #4cc8e1);
			background-size: 400% 400%;

			-webkit-animation: background 18s ease infinite;
			-moz-animation: background 18s ease infinite;
			animation: background 18s ease infinite;
		}

		@-webkit-keyframes background {
			0%{background-position:5% 0%}
			50%{background-position:96% 100%}
			100%{background-position:5% 0%}
		}
		@-moz-keyframes background {
			0%{background-position:5% 0%}
			50%{background-position:96% 100%}
			100%{background-position:5% 0%}
		}
		@keyframes background {
			0%{background-position:5% 0%}
			50%{background-position:96% 100%}
			100%{background-position:5% 0%}
		}
		
		.content {
			position: absolute;
			top: 50%;
			left: 50%;
			margin-right: -50%;
			transform: translate(-50%, -50%);
			
			font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
			font-weight: bold;
			font-size: 1.7rem;
			text-align: center;
			color: #fff;
		}
		.report {
			margin-top: 2rem;
			font-size: 1.2rem;
		}
	</style>
</head>
<body>
	<div class="content">
		<h1>Currently on Maintenance!</h1>
		<span>If you want to get access, use hi@superfurrycdn.nl.</span>
		<br>
		<span class="report">(You can report files on abuse@superfurrycdn.nl)</span>
	</div>
</body>
</html>

             `);
})

app.get("/copy/:live", function (req, res) {
        res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Copy Page</title>
    <link rel="icon" type="image/png" href="/assets/favicon.png" />

    <style>
        body {
            background-color: #ea899a;
            background: linear-gradient(140deg, #ea899a, #4cc8e1);
            background-size: 400% 400%;

            -webkit-animation: background 18s ease infinite;
            -moz-animation: background 18s ease infinite;
            animation: background 18s ease infinite;
        }

        @-webkit-keyframes background {
            0%{background-position:5% 0%}
            50%{background-position:96% 100%}
            100%{background-position:5% 0%}
        }
        @-moz-keyframes background {
            0%{background-position:5% 0%}
            50%{background-position:96% 100%}
            100%{background-position:5% 0%}
        }
        @keyframes background {
            0%{background-position:5% 0%}
            50%{background-position:96% 100%}
            100%{background-position:5% 0%}
        }

        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);

            font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
            font-weight: bold;
            font-size: 1.7rem;
            text-align: center;
            color: #fff;

            display: flex;
            flex-direction: column;
        }
        #text {
            padding: 0.8rem;

            border-radius: 15px;

            background-color: aliceblue;
            color: black;
            transition: transform .3s;
        }
        #text:hover {
            transform: scale(1.05);
        }
        #info {
            margin-top: 1rem;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <div class="content">
        <span id="text" onclick="copy()">${req.params.live}</span>
        <span id="info">Copy the text by pressing it</span>
    </div>
    <script>
        function copy() {
            const text = document.getElementById("text");
            const info = document.getElementById("info");

            navigator.clipboard.writeText(text.innerText);
            info.innerText = "Copied!";
            setTimeout(() => {info.innerText = "Copy the text pressing it"}, 2500);
        }
    </script>
</body>
</html>`);
})

app.listen(process.env.PORT, function () {
  console.log('Le serveur fonctionne...');
});
