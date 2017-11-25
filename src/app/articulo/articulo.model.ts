export class Articulo {
  titulo: string;
  enlace: string;
  votos: number;

  constructor(titulo: string, enlace: string, votos?: number) { // la interrogacion es que puede ser opcional el valor
    this.titulo = titulo;
    this.enlace = enlace;
    this.votos = votos || 0; // el || 0 es el valor por defecto
  }

  voteUp(): void {
    this.votos++;
  }
  voteDown(): void {
    this.votos--;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.enlace.split('//')[1];
      return domainAndPath.split('/')[0];
    }catch (err) {
      return null;
    }
  }
}
