class Stoperica {
  constructor(vremenskiInput, startDugme, pauzaDugme) {
    this.vremenskiInput = vremenskiInput;
    this.startDugme = startDugme;
    this.pauzaDugme = pauzaDugme;

    this.startDugme.addEventListener("click", this.start);
    this.pauzaDugme.addEventListener("click", this.pauza);
  }

  start = () => {
    this.tiktak();
    this.interval = setInterval(this.tiktak, 1000);
  };

  pauza = () => {
    clearInterval(this.interval);
  };

  tiktak = () => {
    console.log("TIK TAK");
  };
}
const vreme = document.querySelector("#vreme");
const start = document.querySelector("#start");
const pauza = document.querySelector("#pauza");

const stoperica = new Stoperica(vreme, start, pauza);
