const cupom = require("./cupom");

test("Loja Completa", () => {
	expect(cupom.imprime_dados_loja()).toBe(
		`Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`
	);
});

test("Nome vazio", () => {
	cupom.dados.nome_loja = "";
	expect(cupom.imprime_dados_loja()).toBe(
		`O campo nome da loja é obrigatório`
	);
	cupom.dados.nome_loja = "Arcos Dourados Com. de Alimentos LTDA";
});

test("Logradouro vazio", () => {
	cupom.dados.logradouro = "";
	expect(cupom.imprime_dados_loja()).toBe(
		`O campo logradouro do endereço é obrigatório`
	);
	cupom.dados.logradouro = "Av. Projetada Leste";
});

test("Número zero", () => {
	cupom.dados.numero = 0;
	expect(cupom.imprime_dados_loja()).toBe(
		`Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, s/n EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`
	);
	cupom.dados.numero = 500;
});

test("Município vazio", () => {
	cupom.dados.municipio = "";
	expect(cupom.imprime_dados_loja()).toBe(
		`O campo município do endereço é obrigatório`
	);
	cupom.dados.municipio = "Campinas";
});

test("Estado vazio", () => {
	cupom.dados.estado = "";
	expect(cupom.imprime_dados_loja()).toBe(
		`O campo estado do endereço é obrigatório`
	);
	cupom.dados.estado = "SP";
});

test("CNPJ vazio", () => {
	cupom.dados.cnpj = "";
	expect(cupom.imprime_dados_loja()).toBe(
		`O campo CNPJ da loja é obrigatório`
	);
	cupom.dados.cnpj = "42.591.651/0797-34";
});

test("Inscrição estadual vazia", () => {
	cupom.dados.inscricao_estadual = "";
	expect(cupom.imprime_dados_loja()).toBe(
		`O campo inscrição estadual da loja é obrigatório`
	);
	cupom.dados.inscricao_estadual = "244.898.500.113";
});

test("Exercício 2 - customizado", () => {
	// Defina seus próprios valores para as variáveis a seguir
	cupom.dados.nome_loja = "Top 10 nomes de lojas";
	cupom.dados.logradouro = "Rua Tchurusbango Tchurusmago";
	cupom.dados.numero = 13;
	cupom.dados.complemento = "Do lado da casa vizinha";
	cupom.dados.bairro = "Bairro do Limoeiro";
	cupom.dados.municipio = "São Paulo";
	cupom.dados.estado = "SP";
	cupom.dados.cep = "08090-284";
	cupom.dados.telefone = "(11) 4002-8922";
	cupom.dados.observacao = "Entre o Campinho e a Lua de Baixo";
	cupom.dados.cnpj = "43.745.249/0001-39";
	cupom.dados.inscricao_estadual = "564.213.199.866";

	let expected = "Top 10 nomes de lojas\n";
	expected += "Rua Tchurusbango Tchurusmago, 13 Do lado da casa vizinha\n";
	expected += "Bairro do Limoeiro - São Paulo - SP\n";
	expected += "CEP:08090-284 Tel (11) 4002-8922\n";
	expected += "Entre o Campinho e a Lua de Baixo\n";
	expected += "CNPJ: 43.745.249/0001-39\n";
	expected += "IE: 564.213.199.866\n";

	//E atualize o texto esperado abaixo
	expect(cupom.imprime_dados_loja()).toBe(expected);
});
