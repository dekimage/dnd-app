const defaultUser = {
  id: 19278132,
  name: "DD",
  email: "dd@gmail.com",
};

class Store {
  user = defaultUser;
  activeCharacter = {};
  allCharacters = [];
  activeCampaign = {};
  allCampaigns = [];

  constructor() {
    makeAutoObservable(this);
  }
}
