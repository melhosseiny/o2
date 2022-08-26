// 1 metric ton = 1000kg
const kg_to_tonne = (kg) => (kg / 1000).toFixed(2);

// returns [formatted_offset, unit]
const format_offset = (offset) => offset >= 1000
  ? [kg_to_tonne(offset), 't']
  : [offset, 'kg'];

export default function Offset({ offset }) {
  const [formatted_offset, unit] = format_offset(offset);

  return e("span", null,
    e("strong", null, formatted_offset),
    ` ${unit} `,
    "CO",
    e("sub", null, "2"),
    "e"
  );
}
