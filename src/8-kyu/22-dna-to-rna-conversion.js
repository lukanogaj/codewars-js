function DNAtoRNA(dna) {
	// create a function which returns an RNA sequence from the given DNA sequence

	const transcript = dna.replaceAll("T", "U");
	return transcript;
}

// console.log(DNAtoRNA("GCAT"));
