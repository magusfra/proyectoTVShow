import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  reparto = [
    { rutaPortada: "https://media.rpctv.com/p/d24aed609cd682d5c189a22ab42c6897/adjuntos/314/imagenes/018/028/0018028472/855x0/smart/000_32ke798jpg.jpg", nombre: "Charles Leclerc", datos: "Charles Marc Hervé Perceval Leclerc (pronunciación en francés: /ʃaʁl ləklɛʁ/, Montecarlo, Mónaco; 16 de octubre de 1997), más conocido como Charles Leclerc, es un piloto de automovilismo monegasco. Fue campeón de la GP3 Series en 2016 y de la Fórmula 2 en 2017 (ambos como debutante). Debutó en la Fórmula 1 con el equipo Sauber en 2018, y desde 2019 es piloto de Scuderia Ferrari, resultando subcampeón del mundo en 2022." },
    { rutaPortada: "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-07/Carlos%20Sainz_1.jpg?itok=FyzvsNCR", nombre: "Carlos Sainz", datos: "Carlos Sainz Vázquez de Castro (Spanish pronunciation: [ˈkaɾlos ˈsajnθ ˈβaθkeθ ðe ˈkastɾo] (listen); born 1 September 1994), otherwise known as Carlos Sainz Jr. or simply Carlos Sainz[a], is a Spanish racing driver currently competing in Formula One for Scuderia Ferrari. He is the son of Carlos Sainz Sr., a double World Rally Champion." },
    { rutaPortada: "https://resizer.glanacion.com/resizer/9DNAXeN-7PiexmJiCp7ffuAaUig=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/ZJRMVGM4OVFTHLLZ4GMAPSVXSM.jpg", nombre: "Lando Norris", datos: "Lando Norris (born 13 November 1999) is a Belgian-British[2] racing driver currently competing in Formula One with McLaren, racing under the British flag. He won the MSA Formula championship in 2015, and the Toyota Racing Series, Eurocup Formula Renault 2.0 and Formula Renault 2.0 Northern European Cup in 2016." },
    { rutaPortada: "https://album.mediaset.es/eimg/2022/12/13/sipausa-42900159_159c.jpg?w=1200&h=900", nombre: "Fernando Alonso", datos: "Born in Oviedo, Asturias to a working-class family, Alonso began kart racing at the age of three and achieved success in local, national, and world championships. He progressed to car racing at the age of 17, winning the Euro Open by Nissan in 1999 and was fourth in the International Formula 3000 Championship of 2000." },
    { rutaPortada: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/99-gunther-steiner-haas-interview-2021-lead.jpg?itok=7RTjiXIL", nombre: "Guenther Steiner", datos: "Guenther Steiner (born 7 April 1965)[1] is a motorsport engineer and team manager who holds dual Italian and American citizenship. He is the current team principal of the Haas Formula One Team (since 2014), and the previous managing director of Jaguar Racing (2001–2003) and technical operations director of its subsequent incarnation, Red Bull Racing.." },
    { rutaPortada: "https://images.hola.com/imagenes/actualidad/20201022177806/lewis-hamilton-canciones-disco/0-881-324/hamilton-getty-t.jpg?tx=w_680", nombre: "Lewis Hamilton", datos: "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (191), among others." },
    { rutaPortada: "https://www.sportellate.it/wp-content/uploads/2021/03/Toto-Wolff.jpg", nombre: "Toto Wolf", datos: "Wolff began his motorsport career in the Austrian Formula Ford Championship and the German Formula Ford Series. He won his category in the 1994 24 Hours Nürburgring and later competed in the FIA GT Championship and Italian GT Championship." },
    { rutaPortada: "https://static.motor.es/fotos-noticias/2021/07/george-russell-piloto-mercedes-f1-2022-202179569-1626110071_4.jpg", nombre: "George Russell", datos: "Wolff began his motorsport career in the Austrian Formula Ford Championship and the German Formula Ford Series. He won his category in the 1994 24 Hours Nürburgring and later competed in the FIA GT Championship and Italian GT Championship." },
    { rutaPortada: "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2022/04/27123132/zak-brown-smiling-in-the-sun-planetf1.jpg", nombre: "Zak Brown", datos: "Zakary Challen Brown (born November 7, 1971)[2] is an American businessman and former professional racing driver, currently residing in England. He is chief executive officer of McLaren Racing with overall responsibility for the business, including strategic direction, operational performance, marketing and commercial development." }
  ]
}

class Reparto {
  nombre: string;
  rutaPortada: string;
  datos: string;

  constructor(nuevoNombre: string, nuevaRuta: string, nuevoDatos: string) {
    this.nombre = nuevoNombre;
    this.rutaPortada = nuevaRuta;
    this.datos = nuevoDatos;

  }

}