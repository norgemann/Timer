class Stoperica {
  constructor(vremenskiInput, startDugme, pauzaDugme) {
    this.vremenskiInput = vremenskiInput;
    this.startDugme = startDugme;
    this.pauzaDugme = pauzaDugme;

    this.startDugme.addEventListener("click", this.start);
  }

  start() {
    console.log("Pocni tajmer");
  }
}
const vreme = document.querySelector("#vreme");
const start = document.querySelector("#start");
const pauza = document.querySelector("#pauza");

new Stoperica(vreme, start, pauza);
