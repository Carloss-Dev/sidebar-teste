import React from "react";
import { DashBoard } from "../components/DashBoardTemplate";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <>
      <DashBoard>
        {/* Aqui está o problema, eu gostaria que quando eu colocasse
            uma largura maior, os itens que estiverem nas colunas ao 
            ladoo desçam para a de baixo, porém isso não está ocorrendo
        */}
        <Card width={"30rem"}>Aoba</Card>
        <Card>Aoba</Card>
        <Card>Aoba</Card>
        <Card>Aoba</Card>
        <Card>Aoba</Card>
        <Card>Aoba</Card>
        <Card>Aoba</Card>
        <Card>Aoba</Card>
        <Card>Aoba</Card>
      </DashBoard>
    </>
  );
};
