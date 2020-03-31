class Stoperica {
  constructor(vremenskiInput, startDugme, pauzaDugme, callback) {
    this.vremenskiInput = vremenskiInput;
    this.startDugme = startDugme;
    this.pauzaDugme = pauzaDugme;

    if (callback) {
      this.naStartu = callback.naStartu;
      this.naOtkucaju = callback.naOtkucaju;
      this.naKraju = callback.naKraju;
    }

    this.startDugme.addEventListener("click", this.start);
    this.pauzaDugme.addEventListener("click", this.pauza);
  }

  start = () => {
    if (this.naStartu) {
      this.naStartu();
    }
    this.otkucaj();
    this.interval = setInterval(this.otkucaj, 1000);
  };

  pauza = () => {
    clearInterval(this.interval);
  };

  otkucaj = () => {
    if (this.preostaloVreme <= 0) {
      this.pauza();
      this.naKraju();
    } else {
      this.preostaloVreme = this.preostaloVreme - 1;
      this.naOtkucaju();
    }
  };

  get preostaloVreme() {
    return parseFloat(this.vremenskiInput.value);
  }

  set preostaloVreme(vreme) {
    this.vremenskiInput.value = vreme;
  }
}
const vreme = document.querySelector("#vreme");
const start = document.querySelector("#start");
const pauza = document.querySelector("#pauza");

const stoperica = new Stoperica(vreme, start, pauza, {
  naStartu() {
    console.log("Pocela stoperica!");
  },
  naOtkucaju() {
    console.log("TIK TAK!");
  },
  naKraju() {
    console.log("Zavrsila stoperica!");
  }
});
