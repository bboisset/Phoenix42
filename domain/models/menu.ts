type menuValues = "/dashboard" | "/performance" | "/temple" | "/settings";

interface menuRow {
    icon?: string;
    name?: string;
    value?: menuValues;
    type?: string;
}

type menu = menuRow[];