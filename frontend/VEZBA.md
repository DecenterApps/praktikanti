# Zadatak za vežbu

Ideja: U okviru ovog projekta povući podatke o proizvoljnom CDP-u (npr. broj 28123) i prikazati u App.js.

- CDP (Collateralized Debt Position) je pozicija u Maker sistemu koja ima kolateral i dug. Svaki CDP ima i svoj ID, odnosno redni broj u sistemu. Kolateral može biti u jednom od više asseta, a tip kolaterala za određen CDP određuje njegov `ilk`.
- Možeš koristiti Oasis → [https://oasis.app/28123](https://oasis.app/28123) da stekneš ideju šta je jedan CDP, kao i da proveriš podatke koje prikazuješ.
- Contracti služe kao izvor informacija. Za povlačenje podataka o CDP-u koristiti contract koji je dostupan na [https://etherscan.io/address/0x68C61AF097b834c68eA6EA5e46aF6c04E8945B2d#readContract](https://etherscan.io/address/0x68C61AF097b834c68eA6EA5e46aF6c04E8945B2d#readContract)
- Koristiti Web3.js biblioteku za komunikaciju sa contractima. Web3 je već instanciran Infura providerom. Ako vas zanima interakcija sa walletom, možete instancirati i  koristeći Metamask injected provider (window.ethereum). Metamask je browser ekstenzija koja služi za menadžment Ethereum walleta.
- U vraćenim podacima na prethodnom contractu `ilk` se odnosi na collateral type, ali je enkodovan u bytes. Možeš koristiti bytesToString/stringToBytes iz `@defisaver/tokens` paketa.
- Ako primetiš da se dug koji contract vraća razlikuje od duga prikazanog na Oasisu, to je zato što contract vraća dug bez uračunate kamate. Svaki collateral type (ilk) ima `rate` sa kojim se množi dug da se dobije aktuelna vrednost. Možeš dohvatiti rate za određen ilk koristeći `ilks` metodu na [https://etherscan.io/address/0x35d1b3f3d7966a1dfe207aa4514c12a259a0492b#readContract](https://etherscan.io/address/0x35d1b3f3d7966a1dfe207aa4514c12a259a0492b#readContract). Rate se na contractu čuva kao broj sa dosta decimala, pa ćeš morati da ga podeliš pre obrade. Nemoj da zaboraviš da koristiš Decimal.js.
