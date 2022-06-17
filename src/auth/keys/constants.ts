import * as path from "path";
import * as fs from 'fs';

export const jwtConstants = {
    public: fs.readFileSync(path.join(__dirname, "id_rsa_pub.pem"), "utf8"),
    private: fs.readFileSync(path.join(__dirname, "id_rsa_priv.pem"), "utf8"),
};
