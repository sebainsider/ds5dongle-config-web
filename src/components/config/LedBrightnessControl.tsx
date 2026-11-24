import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LED_BRIGHTNESS_OPTIONS, LedBrightnessMode } from "../../protocol/config";
import { ConfigHelpButton } from "./ConfigHelpButton";

interface LedBrightnessControlProps {
  label: string;
  value: LedBrightnessMode;
  helpContent?: string;
  disabled?: boolean;
  onChange: (value: LedBrightnessMode) => void;
}

export function LedBrightnessControl({
  label,
  value,
  helpContent,
  disabled = false,
  onChange,
}: LedBrightnessControlProps) {
  const { t } = useTranslation();
  const optionLabels: Record<LedBrightnessMode, string> = {
    0: t("config.ledBrightnessOptions.bright"),
    1: t("config.ledBrightnessOptions.medium"),
    2: t("config.ledBrightnessOptions.dim"),
    3: t("config.ledBrightnessOptions.off"),
  };

  return (
    <div className="control-row toggle-row audio-device-select-row" aria-disabled={disabled}>
      <span className="control-label">
        <strong>{label}</strong>
        {helpContent && <ConfigHelpButton title={label} content={helpContent} />}
      </span>
      <span className="audio-device-select-wrapper">
        <select
          className="audio-device-select"
          value={String(value)}
          disabled={disabled}
          aria-label={label}
          onChange={(event) => onChange(Number(event.target.value) as LedBrightnessMode)}
        >
          {LED_BRIGHTNESS_OPTIONS.map((option) => (
            <option key={option.value} value={String(option.value)}>
              {optionLabels[option.value]}
            </option>
          ))}
        </select>
        <ChevronDown className="audio-device-select-chevron" size={14} aria-hidden="true" />
      </span>
    </div>
  );
}
