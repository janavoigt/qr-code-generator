"use client"

import { useRef, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import Title from "./components/Title";
import {QRCodeCanvas} from 'qrcode.react';
import { FaUpload } from "react-icons/fa";

export default function Home() {

	const [linkValue, setLinkValue] = useState<string>('')
	const [fgColor, setFgColor] = useState<string>("#000000")
	const [bgColor, setBgColor] = useState<string>("#ffffff")
	const [logoUrl, setLogoUrl] = useState<string>("/arrow.svg")
	const [logoSize, setLogoSize] = useState<number>(24)
	const qrCodeRef = useRef<HTMLDivElement>(null)


	function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>){
		const file = e.target.files?.[0]
		 if (!file) return;

		const reader = new FileReader();
		reader.onload = () => setLogoUrl(reader.result as string);
  		reader.readAsDataURL(file);
	}

	function handleDownload(){
		if (!qrCodeRef.current) return;

		const canvas = qrCodeRef.current.querySelector("canvas")
		if (!canvas) return

		const link = document.createElement("a")
		link.href = canvas.toDataURL("image/png")
		link.download = 'qrcode.png'
		link.click();
	}
	
	return (
	<main className="container">
		<Title title="Generate and customize your QR Code"/>

		<section className="qr-code-container">
			<div className="qr-code">
				<Input 
				label="Enter your link:"
				labelFor="link"
				classNameLabel="link-input"
				placeholder="Link here"
				type="link"
				required
				value={linkValue}
				onChange={(e) => setLinkValue(e.target.value)} />

				<div className="qr-code-preview">
					<p>QR Code Preview</p>

					<div ref={qrCodeRef}>
						<QRCodeCanvas
						value={linkValue}
						title={linkValue}
						size={200}
						bgColor={bgColor}
						fgColor={fgColor}
						imageSettings={{
							src: logoUrl,
							x: undefined,
							y: undefined,
							height: logoSize,
							width: logoSize,
							opacity: 1,
							excavate: true,
							crossOrigin: 'anonymous'
						}}
					/>
					</div>
				</div>
			</div>

			

			<div className="qr-code-customization">
				<div className="customization-container">
					<h3>Colors</h3>

					<div className="input-container colors">
						<Input 
						label="Primary color"
						labelFor="fgColor"
						classNameLabel="input-box"
						id={fgColor}
						type="color"
						className="input-color"
						value={fgColor}
						onChange={(e) => setFgColor(e.target.value)}/>

						<Input 
						label="Background color"
						labelFor="bgColor"
						classNameLabel="input-box"
						id={bgColor}
						type="color"
						className="input-color"
						value={bgColor}
						onChange={(e) => setBgColor(e.target.value)}/>
						
					</div>
				</div>

				<div className="customization-container">
					<h3>Logo</h3>

					<div className="input-container">
						<Input 
						label="Insert your logo"
						labelFor="logo"
						classNameLabel="input-box"
						id="logo"
						className="input-file"
						type="file"
						accept="image/*"
						onChange={handleLogoChange}
						/>

						<Button className="input-file-button">
							<FaUpload />
							Choose file
						</Button>

						<Select 
							label="Logo size"
							className="input-box"
							id="logoSize"
							name="logo"
							options={[
								{ value: 24, label: "24px x 24px" },
								{ value: 38, label: "38px x 38px" },
								{ value: 50, label: "50px x 50px" },
							]}
							value={logoSize}
							onChange={(e) => setLogoSize(Number(e.target.value))}
						/>
					</div>
				</div>

				<Button className="download-button" onClick={handleDownload}>Download QR Code</Button>
			</div>
		</section>	
		
	</main>
	);
}
