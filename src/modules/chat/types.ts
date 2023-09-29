export type Dialogue = {
  id: number;
  title: string;
  messages: Message[];
  _count: {
    messages: number;
  };
};
export type Message = {
  id: number;
  createdAt: string;
  updatedAt: string;
  text: string;
  read: boolean;
  chatId: number;
  sender: boolean;
  animate?: boolean;
};
