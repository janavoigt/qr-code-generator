"use client"

import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import Title from "./components/Title";
import {QRCodeCanvas} from 'qrcode.react';
import { FaUpload } from "react-icons/fa";

export default function Home() {

	
	return (
	<main className="container">
		<Title title="Gere o seu QR Code e customize como quiser"/>

		<section className="qr-code-container">
			<div className="qr-code">
				<Input 
				label="Digite o seu Link:"
				labelFor="link"
				classNameLabel="link-input"
				placeholder="Seu Link aqui"
				type="link"
				required />

				<div className="qr-code-preview">
					<p>QR Code Preview</p>

					<QRCodeCanvas
						value={"https://github.com/janavoigt"}
						title={"https://github.com/janavoigt"}
						size={200}
						bgColor={"#ffffff"}
						fgColor={"#000000"}
						imageSettings={{
							src: "https://static.zpao.com/favicon.png",
							x: undefined,
							y: undefined,
							height: 24,
							width: 24,
							opacity: 1,
							excavate: true,
						}}
					/>
				</div>
			</div>

			

			<div className="qr-code-customization">
				<div className="customization-container">
					<h3>Cores</h3>

					<div className="input-container colors">
						<Input 
						label="Cor principal"
						labelFor="fgColor"
						classNameLabel="input-box"
						id="fgColor"
						className="input-color"
						type="color"/>

						<Input 
						label="Cor do fundo"
						labelFor="bgColor"
						classNameLabel="input-box"
						id="bgColor"
						className="input-color"
						type="color"/>
						
					</div>
				</div>

				<div className="customization-container">
					<h3>Logo</h3>

					<div className="input-container">
						<Input 
						label="Insira a sua logo"
						labelFor="logo"
						classNameLabel="input-box"
						id="logo"
						className="input-file"
						type="file"
						accept="image/*"
						/>

						<Button className="input-file-button">
							<FaUpload />
							Escolher arquivo
						</Button>

						<Select 
							label="Tamanho da logo"
							className="input-box"
							id="logoSize"
							name="logo"
							options={[
								{ value: 24, label: "24px x 24px" },
								{ value: 38, label: "38px x 38px" },
								{ value: 50, label: "50px x 50px" },
							]}
						/>
					</div>
				</div>

				<Button className="download-button">Baixar QR Code</Button>
			</div>
		</section>	
		
	</main>
	);
}
