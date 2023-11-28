// Definition des type
type SessionType = {
  day: string;
  kilogram: number;
  calories: number;
}[];

// Definition du formatter UserActivity :
class UserActivity {
  userId: number;
  sessions: SessionType;

  constructor(userId: number, sessions: SessionType) {
    this.userId = userId;
    this.sessions = sessions;
  }

  getFormattedData() {
    const formattedData = this.sessions.map((item) => ({
      day: parseInt(item.day.slice(9)),
      kilogram: item.kilogram,
      calories: item.calories,
    }));

    return formattedData;
  }
}

export default UserActivity;
