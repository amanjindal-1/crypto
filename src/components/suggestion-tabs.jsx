import { suggestions } from "../utils/constants";
import Button from "./button";

const SuggestionTabs = () => {
  return (
    <div className="px-11 w-full mb-5">
      <div className="flex overflow-auto custom_scrollbar gap-5 py-5">
        {suggestions.map((e, i) => (
          <Button
            key={i}
            text={e}
            className="bg-[#17172A]"
            style={{
              background:
                i == 1
                  ? "linear-gradient(90deg, #00FFFF 0%, #00FFA3 100%)"
                  : "",
              color: i == 1 ? "black" : "",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestionTabs;
