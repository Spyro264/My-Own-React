export function render(reactElement, rootElement) {
  function createDOMElement(reactElement) {
    //checking if a react element is a function
    if (typeof reactElement.type === "function") {
      return createDOMElement(reactElement.type());
    }
    if (Array.isArray(reactElement)) {
      // checking if reactElement is an Array
      return reactElement.map((item) => createDOMElement(item));
    }

    // if reactElement is string
    if (typeof reactElement === "string") {
      return document.createTextNode(reactElement);
    }

    const { type, props } = reactElement || {};
    const DOMElement = document.createElement(type);

    // setting props
    Object.entries(props)
      .filter(([key]) => key !== "children")
      .forEach(([key, value]) => {
        DOMElement[key] = value;
      });

    // setting text and using recursion
    props.children.forEach((child) => {
      if (typeof child === "string") {
        const textNode = document.createTextNode(child);
        DOMElement.append(textNode);
      } else {
        DOMElement.append(createDOMElement(child));
      }
    });
    return DOMElement;
  }
  const DOMElement = createDOMElement(reactElement);
  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement);
  } else {
    rootElement.append(DOMElement);
  }
}

export default {
  render,
};
