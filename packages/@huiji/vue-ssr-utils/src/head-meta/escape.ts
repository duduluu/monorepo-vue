// come from he.js

const regexEscape = /["&'<>`]/g;
const escapeMap: Record<string, string> = {
  '"': '&quot;',
  '&': '&amp;',
  "'": '&#x27;',
  '<': '&lt;',
  // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
  // following is not strictly necessary unless it’s part of a tag or an
  // unquoted attribute value. We’re only escaping it to support those
  // situations, and for XML support.
  '>': '&gt;',
  // In Internet Explorer ≤ 8, the backtick character can be used
  // to break out of (un)quoted attribute values or HTML comments.
  // See http://html5sec.org/#102, http://html5sec.org/#108, and
  // http://html5sec.org/#133.
  '`': '&#x60;',
};

/**
 * Encode string content for using in html attribute value
 * @param text the string content
 */
export function escape(text: string): string {
  return text.replace(regexEscape, $0 => escapeMap[$0]);
}
