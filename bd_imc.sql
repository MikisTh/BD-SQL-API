CREATE TABLE IF NOT EXISTS `contas` (
  `nome_contas` varchar(50) NOT NULL,
  `senha_contas` varchar(50) NOT NULL

CREATE TABLE IF NOT EXISTS `dados` (
  `fk_nome_contas` varchar(50) NOT NULL,
  `altura_dados` int(11) NOT NULL,
  `peso_dados` int(11) NOT NULL,
  `imc_dados` int(11) NOT NULL,
  `data_dados` varchar(50) NOT NULL