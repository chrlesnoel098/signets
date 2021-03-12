import './ListeDossiers.scss';
// import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import {instanceFirestore} from '../firebase';
import { useEffect, useState } from 'react';

export default function ListeDossiers({utilisateur}) {
let [dossiers, setDossiers] = useState([]);

  // useEffect(
  //   () => {
  //     let dossTab = [];
  //     instanceFirestore.collection('utilisateurs').doc(utilisateur.uid).collection('dossier').get().then(
  //       reponse => 
  //       reponse.forEach(doc => dossTab.push(doc.data())); 
  //        setDossiers(dossTab);
  //       )
  //     );
  //   }, []
  // )

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}