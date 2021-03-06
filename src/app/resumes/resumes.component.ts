import { Component } from '@angular/core';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.scss']
})
export class ResumesComponent {
  public resumes = [
    {
      date: '12 Juin 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 15'
    }, {
      date: '6 Juin 2020',
      title: 'Initiation au Monde des Ténèbres',
      chars: 'Jean, Repié, Thamos, Roro, Rémi'
    }, {
      date: '30 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 14'
    }, {
      date: '22 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 13'
    }, {
      date: '20 Mai 2020',
      title: 'Les tréfonds aux mille dragons - Team 2',
      pdf: 'assets/resumes/les-trefonds-aux-mille-dragons-book.pdf',
    }, {
      date: '16 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 12',
      pdf: 'assets/resumes/repie/2020-05-16.pdf',
    }, {
      date: '14 Mai 2020',
      title: 'Les tréfonds aux mille dragons - Team 1',
      pdf: 'assets/resumes/les-trefonds-aux-mille-dragons-book.pdf',
    }, {
      date: '9 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 11',
      pdf: 'assets/resumes/repie/2020-05-09.pdf',
    }, {
      date: '2 Mai 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 10'
    }, {
      date: '25 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 9'
    }, {
      date: '17 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 8'
    }, {
      date: '10 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 7',
      pdf: 'assets/resumes/repie/2020-04-10.pdf',
    }, {
      date: '4 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 6',
    }, {
      date: '1 Avril 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 5',
    }, {
      date: '28 Mars 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 4',
      pdf: 'assets/resumes/repie/2020-03-28.pdf',
    }, {
      date: '25 Mars 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 3',
      pdf: 'assets/resumes/repie/2020-03-25.pdf',
    }, {
      date: '21 Mars 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 2',
      pdf: 'assets/resumes/repie/2020-03-21.pdf',
    }, {
      date: '19 Mars 2020',
      title: 'Les Foudres du Roi-Tonnerre - partie 1',
      pdf: 'assets/resumes/repie/2020-03-19.pdf',
    }, {
      date: '28 Septembre 2019',
      title: 'ROT - A la rescousse du château volant (partie 2)',
      pdf: 'assets/resumes/2019-09-28.pdf',
      chars: 'Noelie (8.5), Shinden (8.5), Syccor (8.5), Thibault (8.5), Vador (8.5) : +0.5 niveau',
    }, {
      date: '28 juillet 2019',
      title: 'The game - partie 1',
      chars: 'Jean, Pierre, Thomas 1, Thomas 2',
    }, {
      date: '6 Avril 2019',
      title: 'ROT - A la rescousse du château volant (partie 1)',
      pdf: 'assets/resumes/2019-04-06.pdf',
      chars: 'Noelie (8), Shinden (8), Syccor (8), Thibault (8), Vador (8), Yann (8) : +0.5 niveau',
    }, {
      date: '23 février 2019',
      title: 'Microlite20 - La cuite', // Jeanjean DM (Pierre, Rémi, Thomas 1, Thomas 2)
    }, {
      date: '17 Novembre 2018',
      title: 'D&D 3.5 - Diplomatie Drow (partie 3)',
    }, {
      date: '22 Juillet 2018',
      title: 'D&D 5 - Les monstres de la tempête',
    }, {
      date: '8 Avril 2018',
      title: 'D&D 3.5 - Diplomatie Drow (partie 2)',
    }, {
      date: '18 Mars 2018',
      title: 'D&D 3.5 - Diplomatie Drow (partie 1)',
      description: `
- un mago qui ne prépare pas les bons sorts sauf pour fuir
- un élu divin fanatique qui boit du lait avec une masse qui brille
- un corbeau fufu qui répète tout ce qu'on dit et trop curieux
- un croisé qui rêvait d'être barbare pour lancer des sorts
- un druide maitre de la lumière qui aime les rhinocéros
- un barde qui veut rendre sourd les autres et qui apprend le ukulélé
`
    }, {
      date: '7 Octobre 2017',
      title: 'Savage World - Les 6 nains de la main ( Julien, Darth, Noëlie, Baptiste, clément, Yann)',
    }, {
      date: '29 Avril 2017',
      title: 'HOTQ - Partie 5 : la fin du chateau volant, combat pour reprendre le truc',
    }, {
      date: '12 Mars 2017',
      title: 'HOTQ - Partie 9 : L\'assaut',
    }, {
      date: '05 Février 2017',
      title: 'HOTQ - Partie 8 : La révolte',
    }, {
      date: '07 Janvier 2017',
      title: 'HOTQ - Partie 7 : La mine (part2)',
    }, {
      date: '17 Décember 2016',
      title: 'HOTQ - Partie 6 : La mine',
    }, {
      date: '20 Novembre 2016',
      title: 'HOTQ - Partie 5 : L\'infiltration',
    }, {
      date: '24 Septembre 2016',
      title: 'HOTQ - Inter-Partie : Manigances',
    }, {
      date: '07 Aout 2016',
      title: 'HOTQ - Partie 4 : La caravane',
    }, {
      date: '31 Juillet 2016',
      title: 'HOTQ - Partie 3 : La couveuse & le début du voyage',
    }, {
      date: '12 Juin 2016',
      title: 'HOTQ - Partie 2 : Le campement des assaillants',
    }, {
      date: '22 Mai 2016',
      title: 'HOTQ - Partie 1 : Les flammes du culte',
    },
  ];

  /*
  Dragonia Guilds
  Partie I (Dimanche 21 Juillet 2013) :  Azrael  Aldaric  Vador Syccor Gibli
  Partie II (Lundi 22 juillet 2013):  Syccor  Azrael  Gibli  Aldaric  Vador  
  Partie III (dimanche 04 aout 2013)  Syccor  Aldaric  Vador  
  Partie IV (dimanche 25 aout 2013):  Syccor  Fiboot Aldaric  Gibli Bazhul
  Partie V (dimanche 1er septembre 2013):  Syccor  Fiboot  Shinden  Gibli  Azrael  Vador

  Jeudi 11 Aout 2011 : 2eme partie de la campagne de mage (syccor / bazuhl / vadoo)
  Dimanche 24 Aout 2011 : surement la 1ere partie de la campagne de mage
  */
}
