// Warning: this is incomplete and only contains the values that need to be changed
interface VuexStore {
  reiseloesungSucheState: {
    verkehrsmittel: string[];
    reisende: any[];
    schnelleVerbindungen: boolean;
  };
}

function copyToLocalStorage(): void {
  const storage: VuexStore = JSON.parse(sessionStorage.getItem('vuex'));
  const newStore: VuexStore = {
    reiseloesungSucheState: {
      verkehrsmittel: storage.reiseloesungSucheState.verkehrsmittel,
      reisende: storage.reiseloesungSucheState.reisende,
      schnelleVerbindungen: storage.reiseloesungSucheState.schnelleVerbindungen,
    },
  };

  localStorage.setItem('vuex-persist', JSON.stringify(newStore));
}

function copyToSessionStorage(): void {
  const local: string = localStorage.getItem('vuex-persist');
  const session: string = sessionStorage.getItem('vuex');

  if (local === null || local === session) return;

  const localJson: VuexStore = JSON.parse(local);
  let sessionJson: VuexStore = JSON.parse(session);

  sessionJson = {
    ...sessionJson,
    reiseloesungSucheState: {
      ...sessionJson.reiseloesungSucheState,
      verkehrsmittel: localJson.reiseloesungSucheState.verkehrsmittel,
      reisende: localJson.reiseloesungSucheState.reisende,
      schnelleVerbindungen:
        localJson.reiseloesungSucheState.schnelleVerbindungen,
    },
  };

  sessionStorage.setItem('vuex', JSON.stringify(sessionJson));
  localStorage.setItem('vuex-persist', JSON.stringify(sessionJson));
  location.reload();
}

copyToSessionStorage();

setInterval(copyToLocalStorage, 2_000);
