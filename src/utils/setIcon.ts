export default function setIcon(policyType: string): string {
  switch (policyType) {
    case "Personal Auto":
      return "directions_car";
    case "Personal Umbrella":
      return "beach_access";
    case "Term Life":
      return "psychiatry";
    case "Life Annuity":
      return "psychiatry";
    case "Medicare Supplement":
      return "stethoscope";
    default:
      return "cottage";
  }
}
