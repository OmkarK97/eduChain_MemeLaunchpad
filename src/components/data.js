const memeDataArray = [
  {
    id : "0x90b9e9ad9ec903d7e7ec4c989a572a48b5a97b91069c4a0d1f6962ce31c318c2",
    imageUrl: "data:image/png;base64,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",
    creator : "0x655640a821f810C728aa5892453F3dCA58050BcF",
    address : "0xd930a743a792f95baa83f6a230409525281cadfc",
    tokenName : "TestMeme",
    description : "A meme token"
  },
  {
    id: "0x06f85f9d8a0d358f7902584716b9902acac26dfc4e658722a6af19aa1f33bcda69000000",
    imageUrl: "/Pepe.jpeg",
    creator: "0xa1b2c3d4e5f67890abcd1234567890abcdef1234",
    address: "0x6575897faa4495dcf6b434af151c8bd502724fc8",
    tokenName: "Dgoat",
    description: "Dgoat to the moon",
  },
  {
    id: "0x14fb3c7a7276acfc0f0e26ea839cb5ee6487caa85a90e1ae2a943d4c3560236f7c000000",
    imageUrl: "/shib.jpeg",
    creator: "0xb1c2d3e4f567890abcd1234567890abcdef1234",
    address: "0xc25ce595159446d362c4e34a2ed82c512ab69a54",
    tokenName: "Ddog",
    description: "Ddog dog to the moon",
  },
  {
    id: "0x334ddc7dfdbf1daa69aee17efe82b737ac294f0b78b4e7b632b2b912c80753ef50000000",
    imageUrl: "/wen.jpeg",
    creator: "0xc1d2e3f4567890abcd1234567890abcdef1234",
    address: "0xad55efde59ac321304dffde33ebb0cf72c7ebabf",
    tokenName: "Dcat",
    description: "Dcat to the moon",
  },
  {
    id: "0x778f51ad8a723353c341df2e333a2fa1aa7484cbbbd9e3d72154ebdb8547e7d852000000",
    imageUrl: "/shib.jpeg",
    creator: "0xd1e2f34567890abcd1234567890abcdef1234",
    address: "0x1fdcf802c5d31c36b739fa224d2f9e9954332805",
    tokenName: "Dfrog",
    description: "Dfrog to the moon",
  },
  {
    id: "0x7ce328ea4c3456383e49fb1050c0f3e779082f16aabaeaf4c9d2971111b3e8e254000000",
    imageUrl: "/wen.jpeg",
    creator: "0xe1f234567890abcd1234567890abcdef1234",
    address: "0x7813ef27448cf44b1c9a7b231c05f90d3c3f1e50",
    tokenName: "Dshow",
    description: "Dshow to the moon",
  },
  {
    id: "0x835c6a817a81a37da86c0f459afd70547bafe07b484589013c57230dc1fb7abd50000000",
    imageUrl: "/Pepe.jpeg",
    creator: "0xf1234567890abcd1234567890abcdef1234",
    address: "0xe0dd1a45d5c829ff923cf2aa7cbc398bfa8fb45e",
    tokenName: "Dpepe",
    description: "Dpepe to the moon here we come",
  },
  {
    id: "0x9ec705d9b6dc9773f5409dc10a6511f483797582a45e9cc2c915e7a4d43a870f87000000",
    imageUrl: "/wen.jpeg",
    creator: "0xa1234567890abcd1234567890abcdef1234",
    address: "0xc7cb388613d4dbd836b8a3a5a12415d47fca3b6c",
    tokenName: "Ddog",
    description: "Ddog to the moon",
  }
];

export default memeDataArray;