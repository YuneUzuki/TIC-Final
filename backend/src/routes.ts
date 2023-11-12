import { FastifyInstance } from "fastify";
import {z} from 'zod';
import {prisma} from './lib/prisma'



export async function AppRoutes(app:FastifyInstance)
{
// -- Produto Start -- //
    app.get('/produto/all', async () => {
        const all = await prisma.produto.findMany();
        return all;
    });

    app.get('/produto/:id', async (request) => {
        const titleParam = z.object({
            id: z.string()
        })
        const {id} = titleParam.parse(request.params); 

        return await prisma.produto.findFirst({
            where:{
                id: Number(id),
            }
        })
    })

    app.post('/produto', async (request) => {
        var postBody = z.object(
            {
                cod_material: z.string(),
                desc_prod: z.string(),
                marca_prod: z.string(),
                id_tipo: z.number(),
                sta_ativo: z.string(),
                estoque_min: z.number(),
                estoque_max: z.number(),
                id_unme: z.number(),
                data_incl: z.string(),
                user_cad: z.string(),
                data_cad: z.string(),
            }
        )   

        const {cod_material, desc_prod, marca_prod, id_tipo, sta_ativo, estoque_min, estoque_max, id_unme, data_incl, user_cad, data_cad} = postBody.parse(request.body);

        return await prisma.produto.create({
            data:{
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
                data_cad: data_cad,
            }
        })
    })

    app.put('/produto/:id', async (request) => {
        const idParam = z.object({
            id: z.string()
        })

        const putBody = z.object({
            "cod_material": z.string(),
            "desc_prod": z.string(),
            "marca_prod": z.string(),
            "id_tipo": z.number(),
            "sta_ativo": z.string(),
            "estoque_min": z.number(),
            "estoque_max": z.number(),
            "id_unme": z.number(),
            "data_incl": z.string(),
            "user_cad": z.string(),
            "data_cad": z.string()
        })

        const {id} = idParam.parse(request.params)
        const {cod_material, desc_prod, marca_prod, id_tipo, sta_ativo, estoque_min, estoque_max, id_unme, data_incl, user_cad, data_cad} = putBody.parse(request.body)

        return await prisma.produto.updateMany({
            where: {
                id: Number(id)
            },
            data:{
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
                data_cad: data_cad,
            }
        })
    })

    app.delete('/produto/:id', async (request) =>
    {
        const idParam = z.object({
            id: z.string()
        })

        const {id} = idParam.parse(request.params);

        return await prisma.produto.delete({
            where: {
                id: Number(id),
            }
        })
    })
// -- Produto End -- //

// -- Tipo Prod Start -- //
    app.get('/tipoprod/all', async () => {
        const all = await prisma.tipo_Prod.findMany();
        return all;
    });

    app.get('/tipoprod/:id', async (request) => {
        const titleParam = z.object({
            id: z.string()
        })
        const {id} = titleParam.parse(request.params); 

        return await prisma.tipo_Prod.findFirst({
            where:{
                id_tipo: Number(id),
            }
        })
    })

    app.post('/tipoprod', async (request) => {
        const postBody = z.object(
            {
                segmento: z.string(),
                sta_controla_val: z.string(),
                sta_mov_estoque: z.string(),
                ueps_peps: z.string(),
                user_cad: z.string(),
                data_cad: z.string()
            }
        )

        const {segmento, sta_controla_val, sta_mov_estoque, ueps_peps, user_cad, data_cad} = postBody.parse(request.body);

        return await prisma.tipo_Prod.create({
            data:{
                segmento: segmento,
                sta_controla_val: sta_controla_val,
                sta_mov_estoque: sta_mov_estoque,
                ueps_peps: ueps_peps,
                user_cad: user_cad,
                data_cad: data_cad
            }
        })
    })

    app.put('/tipoprod/:id', async (request) => {
        const idParam = z.object({
            id: z.string()
        })

        const putBody = z.object({
            "segmento": z.string(),
            "sta_controla_val": z.string(),
            "sta_mov_estoque": z.string(),
            "ueps_peps": z.string(),
            "user_cad": z.string(),
            "data_cad": z.string()
        })

        const {id} = idParam.parse(request.params)
        const {segmento, sta_controla_val, sta_mov_estoque, ueps_peps, user_cad, data_cad} = putBody.parse(request.body)

        return await prisma.tipo_Prod.updateMany({
            where: {
                id_tipo: Number(id)
            },
            data:{
                segmento: segmento,
                sta_controla_val: sta_controla_val,
                sta_mov_estoque: sta_mov_estoque,
                ueps_peps: ueps_peps,
                user_cad: user_cad,
                data_cad: data_cad
            }
        })
    })

    app.delete('/tipoprod/:id', async (request) =>
    {
        const idParam = z.object({
            id: z.string()
        })

        const {id} = idParam.parse(request.params);

        return await prisma.tipo_Prod.delete({
            where: {
                id_tipo: Number(id),
            }
        })
    })
// -- Tipo Prod End -- //

// -- Fornecedor Start -- //
    app.get('/fornecedor/all', async () => {
        const all = await prisma.fornecedor.findMany();
        return all;
    });

    app.get('/fornecedor/:id', async (request) => {
        const titleParam = z.object({
            id: z.string()
        })
        const {id} = titleParam.parse(request.params); 

        return await prisma.fornecedor.findFirst({
            where:{
                id_fornecedor: Number(id),
            }
        })
    })

    app.post('/fornecedor', async (request) => {
        const postBody = z.object(
            {
                pessoa: z.boolean(),
                nome_pessoa: z.string(),
                data_cadastro: z.string(),
                num_cpf: z.string(),
                email: z.string(),
                nome_fantasia: z.string(),
                ramo_atividade: z.string(),
                fone: z.string(),
                sta_possui_nfe: z.string(),
                website: z.string(),
                num_insc_estatual: z.string(),
                prazo_entrega: z.number()
            }
        )

        const {pessoa, nome_pessoa, data_cadastro, num_cpf, email, nome_fantasia, ramo_atividade, fone, sta_possui_nfe, website, num_insc_estatual, prazo_entrega} = postBody.parse(request.body);

        return await prisma.fornecedor.create({
            data:{
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
        })
    })

    app.put('/fornecedor/:id', async (request) => {
        const idParam = z.object({
            id: z.string()
        })

        const putBody = z.object({
            "pessoa": z.boolean(),
            "nome_pessoa": z.string(),
            "data_cadastro": z.string(),
            "num_cpf": z.string(),
            "email": z.string(),
            "nome_fantasia": z.string(),
            "ramo_atividade": z.string(),
            "fone": z.string(),
            "sta_possui_nfe": z.string(),
            "website": z.string(),
            "num_insc_estatual": z.string(),
            "prazo_entrega": z.number()
        })

        const {id} = idParam.parse(request.params)
        const {pessoa, nome_pessoa, data_cadastro, num_cpf, email, nome_fantasia, ramo_atividade, fone, sta_possui_nfe, website, num_insc_estatual, prazo_entrega} = putBody.parse(request.body);

        return await prisma.fornecedor.updateMany({
            where: {
                id_fornecedor: Number(id)
            },
            data:{
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
        })
    })

    app.delete('/fornecedor/:id', async (request) =>
    {
        const idParam = z.object({
            id: z.string()
        })

        const {id} = idParam.parse(request.params);

        return await prisma.fornecedor.delete({
            where: {
                id_fornecedor: Number(id),
            }
        })
    })
// -- Fornecedor End -- //

// -- Forn/Prod Start -- //
    app.get('/fornprod/all', async () => {
        const all = await prisma.forn_Prod.findMany();
        return all;
    });

    app.get('/fornprod/:id', async (request) => {
        const titleParam = z.object({
            id: z.string()
        })
        const {id} = titleParam.parse(request.params); 

        return await prisma.forn_Prod.findMany({
            where:{
                id_fornprod: Number(id),
            }
        })
    })

    app.post('/fornprod', async (request) => {
        const postBody = z.object(
            {
                id_fornecedor: z.number(),
                id_produto: z.number()
            }
        )

        const {id_fornecedor, id_produto} = postBody.parse(request.body);

        return await prisma.forn_Prod.create({
            data:{
                id_fornecedor: id_fornecedor,
                id_produto: id_produto
            }
        })
    })

    app.put('/fornprod/:id', async (request) => {
        const idParam = z.object({
            id: z.string()
        })

        const putBody = z.object({
            id_fornprod: z.number(),
            id_fornecedor: z.number(),
            id_produto: z.number()
        })

        const {id} = idParam.parse(request.params)
        const {id_fornecedor, id_fornprod, id_produto} = putBody.parse(request.body);

        return await prisma.forn_Prod.updateMany({
            where: {
                id_fornecedor: Number(id)
            },
            data:{
                id_fornprod: id_fornprod,
                id_fornecedor: id_fornecedor,
                id_produto: id_produto
            }
        })
    })

    app.delete('/fornprod/:id', async (request) =>
    {
        const idParam = z.object({
            id: z.string()
        })

        const {id} = idParam.parse(request.params);

        return await prisma.forn_Prod.delete({
            where: {
                id_fornprod: Number(id),
            }
        })
    })
// -- Forn/Prod End -- //

// -- Tipo Movimento Start -- //
    app.get('/tipomov/all', async () => {
        const all = await prisma.tipo_Movimento.findMany();
        return all;
    });

    app.get('/tipomov/:id', async (request) => {
        const titleParam = z.object({
            id: z.string()
        })
        const {id} = titleParam.parse(request.params); 

        return await prisma.tipo_Movimento.findMany({
            where:{
                id_tipo_mov: Number(id),
            }
        })
    })

    app.post('/tipomov', async (request) => {
        const postBody = z.object(
            {
                desc_tipo_mov: z.string(),
                desc_obs: z.string()
            }
        )

        const {desc_tipo_mov, desc_obs} = postBody.parse(request.body);

        return await prisma.tipo_Movimento.create({
            data:{
                desc_tipo_mov: desc_tipo_mov,
                desc_obs: desc_obs,
            }
        })
    })

    app.put('/tipomov/:id', async (request) => {
        const idParam = z.object({
            id: z.string()
        })

        const putBody = z.object({
            desc_tipo_mov: z.string(),
            desc_obs: z.string(),
        })

        const {id} = idParam.parse(request.params)
        const {desc_tipo_mov, desc_obs} = putBody.parse(request.body);

        return await prisma.tipo_Movimento.updateMany({
            where: {
                id_tipo_mov: Number(id)
            },
            data:{
                desc_tipo_mov: desc_tipo_mov,
                desc_obs: desc_obs
            }
        })
    })

    app.delete('/tipomov/:id', async (request) =>
    {
        const idParam = z.object({
            id: z.string()
        })

        const {id} = idParam.parse(request.params);

        return await prisma.tipo_Movimento.delete({
            where: {
                id_tipo_mov: Number(id),
            }
        })
    })
// -- Tipo Movimento End -- //

// -- Movimentação Start -- //
    app.get('/mov/all', async () => {
        const all = await prisma.movimentacao.findMany();
        return all;
    });

    app.get('/mov/:id', async (request) => {
        const titleParam = z.object({
            id: z.string()
        })
        const {id} = titleParam.parse(request.params); 

        return await prisma.movimentacao.findMany({
            where:{
                id_mov: Number(id),
            }
        })
    })

    app.post('/mov', async (request) => {
        const postBody = z.object(
            {
                id_produto: z.number(),
                es: z.string(),
                data_movto: z.string(),
                tipo_movto: z.number(),
                qtd: z.number(),
                valor: z.number(),
                valor_total: z.number(),
                user_cad: z.string(),
                data_cad: z.string()
            }
        )

        const {id_produto, es, data_movto, tipo_movto, qtd, valor, valor_total, user_cad, data_cad} = postBody.parse(request.body);

        return await prisma.movimentacao.create({
            data:{
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
        })
    })

    app.put('/mov/:id', async (request) => {
        const idParam = z.object({
            id: z.string()
        })

        const putBody = z.object({
            id_produto: z.number(),
            es: z.string(),
            data_movto: z.string(),
            tipo_movto: z.number(),
            qtd: z.number(),
            valor: z.number(),
            valor_total: z.number(),
            user_cad: z.string(),
            data_cad: z.string()
        })

        const {id} = idParam.parse(request.params)
        const {id_produto, es, data_movto, tipo_movto, qtd, valor, valor_total, user_cad, data_cad} = putBody.parse(request.body);

        return await prisma.movimentacao.updateMany({
            where: {
                id_mov: Number(id)
            },
            data:{
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
        })
    })

    app.delete('/mov/:id', async (request) =>
    {
        const idParam = z.object({
            id: z.string()
        })

        const {id} = idParam.parse(request.params);

        return await prisma.movimentacao.delete({
            where: {
                id_mov: Number(id),
            }
        })
    })
// -- Movimentação End -- //

// -- Unidade de Medida Start -- //
    app.get('/unme/all', async () => {
        const all = await prisma.unidade_Medida.findMany();
        return all;
    });

    app.get('/unme/:id', async (request) => {
        const titleParam = z.object({
            id: z.string()
        })
        const {id} = titleParam.parse(request.params); 

        return await prisma.unidade_Medida.findFirst({
            where:{
                id_unme: Number(id),
            }
        })
    })

    app.post('/unme', async (request) => {
        const postBody = z.object(
            {
                des_unidade: z.string(),
                unid_sigla: z.string(),
                user_cad: z.string(),
                data_cad: z.string()
            }
        )

        const {des_unidade, unid_sigla, user_cad, data_cad} = postBody.parse(request.body);

        return await prisma.unidade_Medida.create({
            data:{
                des_unidade: des_unidade,
                unid_sigla: unid_sigla,
                user_cad: user_cad,
                data_cad: data_cad
            }
        })
    })

    app.put('/unme/:id', async (request) => {
        const idParam = z.object({
            id: z.string()
        })

        const putBody = z.object({
            des_unidade: z.string(),
            unid_sigla: z.string(),
            user_cad: z.string(),
            data_cad: z.string()
        })

        const {id} = idParam.parse(request.params)
        const {des_unidade, unid_sigla, user_cad, data_cad} = putBody.parse(request.body);

        return await prisma.unidade_Medida.updateMany({
            where: {
                id_unme: Number(id)
            },
            data:{
                des_unidade: des_unidade,
                unid_sigla: unid_sigla,
                user_cad: user_cad,
                data_cad: data_cad
            }
        })
    })

    app.delete('/unme/:id', async (request) =>
    {
        const idParam = z.object({
            id: z.string()
        })

        const {id} = idParam.parse(request.params);

        return await prisma.unidade_Medida.delete({
            where: {
                id_unme: Number(id),
            }
        })
    })
// -- Unidade de Medida End -- //

// -- User Start -- //
    app.get('/login/:username/:password', async (request) => {
        const loginInfo = z.object({
            username: z.string(),
            password: z.string()
        })

        const {username, password} = loginInfo.parse(request.params);

        return await prisma.user_Login.findFirst({
            where: {
                username: username,
                password: password,
            }
        })
    })

    app.get('/usuarios/:currentuser', async (request) => {
        return await prisma.user_Login.findMany()
    })

    app.get('/usuarios/single/:username', async (request) => {
        const loginInfo = z.object({
            username: z.string(),
        })

        const {username} = loginInfo.parse(request.params);

        return await prisma.user_Login.findFirst({
                where: {
                    username: username
                }
            }
        )
    })

    app.post('/login/:username/:password', async (request) => {
        const loginInfo = z.object({
            username: z.string(),
            password: z.string()
        })

        const {username, password} = loginInfo.parse(request.params);

        return await prisma.user_Login.create({
            data: {
                username: username,
                password: password
            }
        })
    })

    app.delete('/login/:username', async (request) => {
        const loginInfo = z.object({
            username: z.string()
        })

        const {username} = loginInfo.parse(request.params);

        return await prisma.user_Login.delete({
            where: {
                username: username
            }
        })
    })

    app.put('/login/:headUsername', async (request) => {
        const parameters = z.object({
            headUsername: z.string()
        })

        const bodyInfo = z.object({
            username: z.string(),
            password: z.string()
        })

        const {headUsername} = parameters.parse(request.params);
        const {username, password} = bodyInfo.parse(request.body);

        return await prisma.user_Login.update({
            where:{
                username: headUsername
            },
            data:{
                username: username,
                password: password
            }
        })
    })
// -- User End -- //
}