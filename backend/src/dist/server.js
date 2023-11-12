"use strict";
exports.__esModule = true;
var routes_1 = require("./routes");
var app = Fastify();
app.listen({ port: 776 }).then(function () { console.log("Server Running"); });
app.register(routes_1.AppRoutes);
app.register(cors);
