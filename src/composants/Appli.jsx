import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Accueil from './Accueil';
import { useEffect, useState } from 'react';
import { instanceFirestore } from '../firebase';
import firebase from 'firebase/app'

export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged(
        util => {
          setUtilisateur(util)
          if(util) {
            instanceFirestore.collection('utilisateurs').doc(util.uid).set({
              nom: util.displayName, 
              courriel: util.email,
              datecompte: firebase.firestore.FieldValue.serverTimestamp()
            }, {merge: true}); 
          } 
          console.log("Objet utilisateur connecté retrouné par google" + util);
        }
      );
    }, []
  );

  return (
    <div className="Appli">
      {
        utilisateur ?
          <>
            <Entete utilisateur={utilisateur} />
            <section className="contenu-principal">
              <ListeDossiers utilisateur={utilisateur} />
              <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
                <AddIcon />
              </Fab>
            </section>
          </>
          :
          <Accueil />
      }
    </div>
  );
}
