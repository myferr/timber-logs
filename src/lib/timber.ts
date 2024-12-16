import { Colors } from "./colors.js";
import { Icons } from "./icons.js";

interface Options {
  type?: any;
  color?: any;
  filled?: boolean;
  icon?: boolean;
}

class timber {
  static log(message: string, { color, filled, type, icon }: Options): void {
    if (color === undefined || color === "") {
      if (type === undefined || type === "") {
        console.log(message);
      } else {
        if (icon) {
          console.log(`${Colors[type]}${Icons[type] + " "}${message}\x1b[0m`);
        } else {
          console.log(`${Colors[type]}${message}\x1b[0m`);
        }
      }
    } else {
      let c: string = Colors[color];
      if (type === undefined || type === "") {
        if (filled) {
          c = c.replace("[3", "[4");
          console.log(c);
        }
      } else {
        c = Colors[type];
      }
      console.log(`${c}${message}\x1b[0m`);
    }
  }
}

export { timber };
