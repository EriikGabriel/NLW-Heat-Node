import { serverHttp } from "./app";

const PORT = 3000;

serverHttp.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
