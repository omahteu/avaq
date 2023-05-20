-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 19/05/2023 às 20:07
-- Versão do servidor: 10.5.19-MariaDB-cll-lve
-- Versão do PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u626803805_avaqce`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaqce_provas`
--

CREATE TABLE `avaqce_provas` (
  `id` int(11) NOT NULL,
  `cod` varchar(20) NOT NULL,
  `disciplina` varchar(100) NOT NULL,
  `um` text NOT NULL,
  `dois` text NOT NULL,
  `tres` text NOT NULL,
  `quatro` text NOT NULL,
  `cinco` text NOT NULL,
  `seis` text NOT NULL,
  `sete` text NOT NULL,
  `oito` text NOT NULL,
  `nove` text NOT NULL,
  `dez` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `avaqce_provas`
--

INSERT INTO `avaqce_provas` (`id`, `cod`, `disciplina`, `um`, `dois`, `tres`, `quatro`, `cinco`, `seis`, `sete`, `oito`, `nove`, `dez`) VALUES
(1, 'gdgr254', 'it', 'fewfe', 'fdsfeg', 'gfdgr', 'dvdgre', 'dfgr', 'fdcbvfdb', 'dfsd', 'gfdsgr', 'gfdgf', 'gfsgr');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `avaqce_provas`
--
ALTER TABLE `avaqce_provas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `avaqce_provas`
--
ALTER TABLE `avaqce_provas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
