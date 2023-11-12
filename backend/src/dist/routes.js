"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AppRoutes = void 0;
var zod_1 = require("zod");
var prisma_1 = require("./lib/prisma");
function AppRoutes(app) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            // -- Produto Start -- //
            app.get('/produto/all', function () { return __awaiter(_this, void 0, void 0, function () {
                var all;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.produto.findMany()];
                        case 1:
                            all = _a.sent();
                            return [2 /*return*/, all];
                    }
                });
            }); });
            app.get('/produto/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var titleParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            titleParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = titleParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.produto.findFirst({
                                    where: {
                                        id: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.post('/produto', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var postBody, _a, cod_material, desc_prod, marca_prod, id_tipo, sta_ativo, estoque_min, estoque_max, id_unme, data_incl, user_cad, data_cad;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            postBody = zod_1.z.object({
                                cod_material: zod_1.z.string(),
                                desc_prod: zod_1.z.string(),
                                marca_prod: zod_1.z.string(),
                                id_tipo: zod_1.z.number(),
                                sta_ativo: zod_1.z.string(),
                                estoque_min: zod_1.z.number(),
                                estoque_max: zod_1.z.number(),
                                id_unme: zod_1.z.number(),
                                data_incl: zod_1.z.string(),
                                user_cad: zod_1.z.string(),
                                data_cad: zod_1.z.string()
                            });
                            _a = postBody.parse(request.body), cod_material = _a.cod_material, desc_prod = _a.desc_prod, marca_prod = _a.marca_prod, id_tipo = _a.id_tipo, sta_ativo = _a.sta_ativo, estoque_min = _a.estoque_min, estoque_max = _a.estoque_max, id_unme = _a.id_unme, data_incl = _a.data_incl, user_cad = _a.user_cad, data_cad = _a.data_cad;
                            return [4 /*yield*/, prisma_1.prisma.produto.create({
                                    data: {
                                        cod_material: cod_material,
                                        desc_prod: desc_prod,
                                        marca_prod: marca_prod,
                                        id_tipo: id_tipo,
                                        sta_ativo: sta_ativo,
                                        estoque_min: estoque_min,
                                        estoque_max: estoque_max,
                                        id_unme: id_unme,
                                        data_incl: data_incl,
                                        user_cad: user_cad,
                                        data_cad: data_cad
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app.put('/produto/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, putBody, id, _a, cod_material, desc_prod, marca_prod, id_tipo, sta_ativo, estoque_min, estoque_max, id_unme, data_incl, user_cad, data_cad;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            putBody = zod_1.z.object({
                                "cod_material": zod_1.z.string(),
                                "desc_prod": zod_1.z.string(),
                                "marca_prod": zod_1.z.string(),
                                "id_tipo": zod_1.z.number(),
                                "sta_ativo": zod_1.z.string(),
                                "estoque_min": zod_1.z.number(),
                                "estoque_max": zod_1.z.number(),
                                "id_unme": zod_1.z.number(),
                                "data_incl": zod_1.z.string(),
                                "user_cad": zod_1.z.string(),
                                "data_cad": zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            _a = putBody.parse(request.body), cod_material = _a.cod_material, desc_prod = _a.desc_prod, marca_prod = _a.marca_prod, id_tipo = _a.id_tipo, sta_ativo = _a.sta_ativo, estoque_min = _a.estoque_min, estoque_max = _a.estoque_max, id_unme = _a.id_unme, data_incl = _a.data_incl, user_cad = _a.user_cad, data_cad = _a.data_cad;
                            return [4 /*yield*/, prisma_1.prisma.produto.updateMany({
                                    where: {
                                        id: Number(id)
                                    },
                                    data: {
                                        cod_material: cod_material,
                                        desc_prod: desc_prod,
                                        marca_prod: marca_prod,
                                        id_tipo: id_tipo,
                                        sta_ativo: sta_ativo,
                                        estoque_min: estoque_min,
                                        estoque_max: estoque_max,
                                        id_unme: id_unme,
                                        data_incl: data_incl,
                                        user_cad: user_cad,
                                        data_cad: data_cad
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app["delete"]('/produto/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.produto["delete"]({
                                    where: {
                                        id: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            // -- Produto End -- //
            // -- Tipo Prod Start -- //
            app.get('/tipoprod/all', function () { return __awaiter(_this, void 0, void 0, function () {
                var all;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.tipo_Prod.findMany()];
                        case 1:
                            all = _a.sent();
                            return [2 /*return*/, all];
                    }
                });
            }); });
            app.get('/tipoprod/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var titleParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            titleParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = titleParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.tipo_Prod.findFirst({
                                    where: {
                                        id_tipo: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.post('/tipoprod', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var postBody, _a, segmento, sta_controla_val, sta_mov_estoque, ueps_peps, user_cad, data_cad;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            postBody = zod_1.z.object({
                                segmento: zod_1.z.string(),
                                sta_controla_val: zod_1.z.string(),
                                sta_mov_estoque: zod_1.z.string(),
                                ueps_peps: zod_1.z.string(),
                                user_cad: zod_1.z.string(),
                                data_cad: zod_1.z.string()
                            });
                            _a = postBody.parse(request.body), segmento = _a.segmento, sta_controla_val = _a.sta_controla_val, sta_mov_estoque = _a.sta_mov_estoque, ueps_peps = _a.ueps_peps, user_cad = _a.user_cad, data_cad = _a.data_cad;
                            return [4 /*yield*/, prisma_1.prisma.tipo_Prod.create({
                                    data: {
                                        segmento: segmento,
                                        sta_controla_val: sta_controla_val,
                                        sta_mov_estoque: sta_mov_estoque,
                                        ueps_peps: ueps_peps,
                                        user_cad: user_cad,
                                        data_cad: data_cad
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app.put('/tipoprod/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, putBody, id, _a, segmento, sta_controla_val, sta_mov_estoque, ueps_peps, user_cad, data_cad;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            putBody = zod_1.z.object({
                                "segmento": zod_1.z.string(),
                                "sta_controla_val": zod_1.z.string(),
                                "sta_mov_estoque": zod_1.z.string(),
                                "ueps_peps": zod_1.z.string(),
                                "user_cad": zod_1.z.string(),
                                "data_cad": zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            _a = putBody.parse(request.body), segmento = _a.segmento, sta_controla_val = _a.sta_controla_val, sta_mov_estoque = _a.sta_mov_estoque, ueps_peps = _a.ueps_peps, user_cad = _a.user_cad, data_cad = _a.data_cad;
                            return [4 /*yield*/, prisma_1.prisma.tipo_Prod.updateMany({
                                    where: {
                                        id_tipo: Number(id)
                                    },
                                    data: {
                                        segmento: segmento,
                                        sta_controla_val: sta_controla_val,
                                        sta_mov_estoque: sta_mov_estoque,
                                        ueps_peps: ueps_peps,
                                        user_cad: user_cad,
                                        data_cad: data_cad
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app["delete"]('/tipoprod/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.tipo_Prod["delete"]({
                                    where: {
                                        id_tipo: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            // -- Tipo Prod End -- //
            // -- Fornecedor Start -- //
            app.get('/fornecedor/all', function () { return __awaiter(_this, void 0, void 0, function () {
                var all;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.fornecedor.findMany()];
                        case 1:
                            all = _a.sent();
                            return [2 /*return*/, all];
                    }
                });
            }); });
            app.get('/fornecedor/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var titleParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            titleParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = titleParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.fornecedor.findFirst({
                                    where: {
                                        id_fornecedor: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.post('/fornecedor', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var postBody, _a, pessoa, nome_pessoa, data_cadastro, num_cpf, email, nome_fantasia, ramo_atividade, fone, sta_possui_nfe, website, num_insc_estatual, prazo_entrega;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            postBody = zod_1.z.object({
                                pessoa: zod_1.z.boolean(),
                                nome_pessoa: zod_1.z.string(),
                                data_cadastro: zod_1.z.string(),
                                num_cpf: zod_1.z.string(),
                                email: zod_1.z.string(),
                                nome_fantasia: zod_1.z.string(),
                                ramo_atividade: zod_1.z.string(),
                                fone: zod_1.z.string(),
                                sta_possui_nfe: zod_1.z.string(),
                                website: zod_1.z.string(),
                                num_insc_estatual: zod_1.z.string(),
                                prazo_entrega: zod_1.z.number()
                            });
                            _a = postBody.parse(request.body), pessoa = _a.pessoa, nome_pessoa = _a.nome_pessoa, data_cadastro = _a.data_cadastro, num_cpf = _a.num_cpf, email = _a.email, nome_fantasia = _a.nome_fantasia, ramo_atividade = _a.ramo_atividade, fone = _a.fone, sta_possui_nfe = _a.sta_possui_nfe, website = _a.website, num_insc_estatual = _a.num_insc_estatual, prazo_entrega = _a.prazo_entrega;
                            return [4 /*yield*/, prisma_1.prisma.fornecedor.create({
                                    data: {
                                        pessoa: pessoa,
                                        nome_pessoa: nome_pessoa,
                                        data_cadastro: data_cadastro,
                                        num_cpf: num_cpf,
                                        email: email,
                                        nome_fantasia: nome_fantasia,
                                        ramo_atividade: ramo_atividade,
                                        fone: fone,
                                        sta_possui_nfe: sta_possui_nfe,
                                        website: website,
                                        num_insc_estatual: num_insc_estatual,
                                        prazo_entrega: prazo_entrega
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app.put('/fornecedor/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, putBody, id, _a, pessoa, nome_pessoa, data_cadastro, num_cpf, email, nome_fantasia, ramo_atividade, fone, sta_possui_nfe, website, num_insc_estatual, prazo_entrega;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            putBody = zod_1.z.object({
                                "pessoa": zod_1.z.boolean(),
                                "nome_pessoa": zod_1.z.string(),
                                "data_cadastro": zod_1.z.string(),
                                "num_cpf": zod_1.z.string(),
                                "email": zod_1.z.string(),
                                "nome_fantasia": zod_1.z.string(),
                                "ramo_atividade": zod_1.z.string(),
                                "fone": zod_1.z.string(),
                                "sta_possui_nfe": zod_1.z.string(),
                                "website": zod_1.z.string(),
                                "num_insc_estatual": zod_1.z.string(),
                                "prazo_entrega": zod_1.z.number()
                            });
                            id = idParam.parse(request.params).id;
                            _a = putBody.parse(request.body), pessoa = _a.pessoa, nome_pessoa = _a.nome_pessoa, data_cadastro = _a.data_cadastro, num_cpf = _a.num_cpf, email = _a.email, nome_fantasia = _a.nome_fantasia, ramo_atividade = _a.ramo_atividade, fone = _a.fone, sta_possui_nfe = _a.sta_possui_nfe, website = _a.website, num_insc_estatual = _a.num_insc_estatual, prazo_entrega = _a.prazo_entrega;
                            return [4 /*yield*/, prisma_1.prisma.fornecedor.updateMany({
                                    where: {
                                        id_fornecedor: Number(id)
                                    },
                                    data: {
                                        pessoa: pessoa,
                                        nome_pessoa: nome_pessoa,
                                        data_cadastro: data_cadastro,
                                        num_cpf: num_cpf,
                                        email: email,
                                        nome_fantasia: nome_fantasia,
                                        ramo_atividade: ramo_atividade,
                                        fone: fone,
                                        sta_possui_nfe: sta_possui_nfe,
                                        website: website,
                                        num_insc_estatual: num_insc_estatual,
                                        prazo_entrega: prazo_entrega
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app["delete"]('/fornecedor/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.fornecedor["delete"]({
                                    where: {
                                        id_fornecedor: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            // -- Fornecedor End -- //
            // -- Forn/Prod Start -- //
            app.get('/fornprod/all', function () { return __awaiter(_this, void 0, void 0, function () {
                var all;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.forn_Prod.findMany()];
                        case 1:
                            all = _a.sent();
                            return [2 /*return*/, all];
                    }
                });
            }); });
            app.get('/fornprod/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var titleParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            titleParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = titleParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.forn_Prod.findMany({
                                    where: {
                                        id_fornprod: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.post('/fornprod', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var postBody, _a, id_fornecedor, id_produto;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            postBody = zod_1.z.object({
                                id_fornecedor: zod_1.z.number(),
                                id_produto: zod_1.z.number()
                            });
                            _a = postBody.parse(request.body), id_fornecedor = _a.id_fornecedor, id_produto = _a.id_produto;
                            return [4 /*yield*/, prisma_1.prisma.forn_Prod.create({
                                    data: {
                                        id_fornecedor: id_fornecedor,
                                        id_produto: id_produto
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app.put('/fornprod/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, putBody, id, _a, id_fornecedor, id_fornprod, id_produto;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            putBody = zod_1.z.object({
                                id_fornprod: zod_1.z.number(),
                                id_fornecedor: zod_1.z.number(),
                                id_produto: zod_1.z.number()
                            });
                            id = idParam.parse(request.params).id;
                            _a = putBody.parse(request.body), id_fornecedor = _a.id_fornecedor, id_fornprod = _a.id_fornprod, id_produto = _a.id_produto;
                            return [4 /*yield*/, prisma_1.prisma.forn_Prod.updateMany({
                                    where: {
                                        id_fornecedor: Number(id)
                                    },
                                    data: {
                                        id_fornprod: id_fornprod,
                                        id_fornecedor: id_fornecedor,
                                        id_produto: id_produto
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app["delete"]('/fornprod/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.forn_Prod["delete"]({
                                    where: {
                                        id_fornprod: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            // -- Forn/Prod End -- //
            // -- Tipo Movimento Start -- //
            app.get('/tipomov/all', function () { return __awaiter(_this, void 0, void 0, function () {
                var all;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.tipo_Movimento.findMany()];
                        case 1:
                            all = _a.sent();
                            return [2 /*return*/, all];
                    }
                });
            }); });
            app.get('/tipomov/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var titleParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            titleParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = titleParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.tipo_Movimento.findMany({
                                    where: {
                                        id_tipo_mov: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.post('/tipomov', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var postBody, _a, desc_tipo_mov, desc_obs;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            postBody = zod_1.z.object({
                                desc_tipo_mov: zod_1.z.string(),
                                desc_obs: zod_1.z.string()
                            });
                            _a = postBody.parse(request.body), desc_tipo_mov = _a.desc_tipo_mov, desc_obs = _a.desc_obs;
                            return [4 /*yield*/, prisma_1.prisma.tipo_Movimento.create({
                                    data: {
                                        desc_tipo_mov: desc_tipo_mov,
                                        desc_obs: desc_obs
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app.put('/tipomov/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, putBody, id, _a, desc_tipo_mov, desc_obs;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            putBody = zod_1.z.object({
                                desc_tipo_mov: zod_1.z.string(),
                                desc_obs: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            _a = putBody.parse(request.body), desc_tipo_mov = _a.desc_tipo_mov, desc_obs = _a.desc_obs;
                            return [4 /*yield*/, prisma_1.prisma.tipo_Movimento.updateMany({
                                    where: {
                                        id_tipo_mov: Number(id)
                                    },
                                    data: {
                                        desc_tipo_mov: desc_tipo_mov,
                                        desc_obs: desc_obs
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app["delete"]('/tipomov/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.tipo_Movimento["delete"]({
                                    where: {
                                        id_tipo_mov: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            // -- Tipo Movimento End -- //
            // -- Movimentação Start -- //
            app.get('/mov/all', function () { return __awaiter(_this, void 0, void 0, function () {
                var all;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.movimentacao.findMany()];
                        case 1:
                            all = _a.sent();
                            return [2 /*return*/, all];
                    }
                });
            }); });
            app.get('/mov/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var titleParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            titleParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = titleParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.movimentacao.findMany({
                                    where: {
                                        id_mov: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.post('/mov', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var postBody, _a, id_produto, es, data_movto, tipo_movto, qtd, valor, valor_total, user_cad, data_cad;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            postBody = zod_1.z.object({
                                id_produto: zod_1.z.number(),
                                es: zod_1.z.string(),
                                data_movto: zod_1.z.string(),
                                tipo_movto: zod_1.z.number(),
                                qtd: zod_1.z.number(),
                                valor: zod_1.z.number(),
                                valor_total: zod_1.z.number(),
                                user_cad: zod_1.z.string(),
                                data_cad: zod_1.z.string()
                            });
                            _a = postBody.parse(request.body), id_produto = _a.id_produto, es = _a.es, data_movto = _a.data_movto, tipo_movto = _a.tipo_movto, qtd = _a.qtd, valor = _a.valor, valor_total = _a.valor_total, user_cad = _a.user_cad, data_cad = _a.data_cad;
                            return [4 /*yield*/, prisma_1.prisma.movimentacao.create({
                                    data: {
                                        id_produto: id_produto,
                                        es: es,
                                        data_movto: data_movto,
                                        tipo_movto: tipo_movto,
                                        qtd: qtd,
                                        valor: valor,
                                        valor_total: valor_total,
                                        user_cad: user_cad,
                                        data_cad: data_cad
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app.put('/mov/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, putBody, id, _a, id_produto, es, data_movto, tipo_movto, qtd, valor, valor_total, user_cad, data_cad;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            putBody = zod_1.z.object({
                                id_produto: zod_1.z.number(),
                                es: zod_1.z.string(),
                                data_movto: zod_1.z.string(),
                                tipo_movto: zod_1.z.number(),
                                qtd: zod_1.z.number(),
                                valor: zod_1.z.number(),
                                valor_total: zod_1.z.number(),
                                user_cad: zod_1.z.string(),
                                data_cad: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            _a = putBody.parse(request.body), id_produto = _a.id_produto, es = _a.es, data_movto = _a.data_movto, tipo_movto = _a.tipo_movto, qtd = _a.qtd, valor = _a.valor, valor_total = _a.valor_total, user_cad = _a.user_cad, data_cad = _a.data_cad;
                            return [4 /*yield*/, prisma_1.prisma.movimentacao.updateMany({
                                    where: {
                                        id_mov: Number(id)
                                    },
                                    data: {
                                        id_produto: id_produto,
                                        es: es,
                                        data_movto: data_movto,
                                        tipo_movto: tipo_movto,
                                        qtd: qtd,
                                        valor: valor,
                                        valor_total: valor_total,
                                        user_cad: user_cad,
                                        data_cad: data_cad
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app["delete"]('/mov/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.movimentacao["delete"]({
                                    where: {
                                        id_mov: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            // -- Movimentação End -- //
            // -- Unidade de Medida Start -- //
            app.get('/unme/all', function () { return __awaiter(_this, void 0, void 0, function () {
                var all;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.unidade_Medida.findMany()];
                        case 1:
                            all = _a.sent();
                            return [2 /*return*/, all];
                    }
                });
            }); });
            app.get('/unme/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var titleParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            titleParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = titleParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.unidade_Medida.findFirst({
                                    where: {
                                        id_unme: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.post('/unme', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var postBody, _a, des_unidade, unid_sigla, user_cad, data_cad;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            postBody = zod_1.z.object({
                                des_unidade: zod_1.z.string(),
                                unid_sigla: zod_1.z.string(),
                                user_cad: zod_1.z.string(),
                                data_cad: zod_1.z.string()
                            });
                            _a = postBody.parse(request.body), des_unidade = _a.des_unidade, unid_sigla = _a.unid_sigla, user_cad = _a.user_cad, data_cad = _a.data_cad;
                            return [4 /*yield*/, prisma_1.prisma.unidade_Medida.create({
                                    data: {
                                        des_unidade: des_unidade,
                                        unid_sigla: unid_sigla,
                                        user_cad: user_cad,
                                        data_cad: data_cad
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app.put('/unme/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, putBody, id, _a, des_unidade, unid_sigla, user_cad, data_cad;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            putBody = zod_1.z.object({
                                des_unidade: zod_1.z.string(),
                                unid_sigla: zod_1.z.string(),
                                user_cad: zod_1.z.string(),
                                data_cad: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            _a = putBody.parse(request.body), des_unidade = _a.des_unidade, unid_sigla = _a.unid_sigla, user_cad = _a.user_cad, data_cad = _a.data_cad;
                            return [4 /*yield*/, prisma_1.prisma.unidade_Medida.updateMany({
                                    where: {
                                        id_unme: Number(id)
                                    },
                                    data: {
                                        des_unidade: des_unidade,
                                        unid_sigla: unid_sigla,
                                        user_cad: user_cad,
                                        data_cad: data_cad
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app["delete"]('/unme/:id', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var idParam, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            idParam = zod_1.z.object({
                                id: zod_1.z.string()
                            });
                            id = idParam.parse(request.params).id;
                            return [4 /*yield*/, prisma_1.prisma.unidade_Medida["delete"]({
                                    where: {
                                        id_unme: Number(id)
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            // -- Unidade de Medida End -- //
            // -- User Start -- //
            app.get('/login/:username/:password', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var loginInfo, _a, username, password;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            loginInfo = zod_1.z.object({
                                username: zod_1.z.string(),
                                password: zod_1.z.string()
                            });
                            _a = loginInfo.parse(request.params), username = _a.username, password = _a.password;
                            return [4 /*yield*/, prisma_1.prisma.user_Login.findFirst({
                                    where: {
                                        username: username,
                                        password: password
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app.get('/usuarios/:currentuser', function (request) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma_1.prisma.user_Login.findMany()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.get('/usuarios/single/:username', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var loginInfo, username;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            loginInfo = zod_1.z.object({
                                username: zod_1.z.string()
                            });
                            username = loginInfo.parse(request.params).username;
                            return [4 /*yield*/, prisma_1.prisma.user_Login.findFirst({
                                    where: {
                                        username: username
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.post('/login/:username/:password', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var loginInfo, _a, username, password;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            loginInfo = zod_1.z.object({
                                username: zod_1.z.string(),
                                password: zod_1.z.string()
                            });
                            _a = loginInfo.parse(request.params), username = _a.username, password = _a.password;
                            return [4 /*yield*/, prisma_1.prisma.user_Login.create({
                                    data: {
                                        username: username,
                                        password: password
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            app["delete"]('/login/:username', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var loginInfo, username;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            loginInfo = zod_1.z.object({
                                username: zod_1.z.string()
                            });
                            username = loginInfo.parse(request.params).username;
                            return [4 /*yield*/, prisma_1.prisma.user_Login["delete"]({
                                    where: {
                                        username: username
                                    }
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); });
            app.put('/login/:headUsername', function (request) { return __awaiter(_this, void 0, void 0, function () {
                var parameters, bodyInfo, headUsername, _a, username, password;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            parameters = zod_1.z.object({
                                headUsername: zod_1.z.string()
                            });
                            bodyInfo = zod_1.z.object({
                                username: zod_1.z.string(),
                                password: zod_1.z.string()
                            });
                            headUsername = parameters.parse(request.params).headUsername;
                            _a = bodyInfo.parse(request.body), username = _a.username, password = _a.password;
                            return [4 /*yield*/, prisma_1.prisma.user_Login.update({
                                    where: {
                                        username: headUsername
                                    },
                                    data: {
                                        username: username,
                                        password: password
                                    }
                                })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
exports.AppRoutes = AppRoutes;
