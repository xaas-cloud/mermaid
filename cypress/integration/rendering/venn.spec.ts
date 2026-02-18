import { imgSnapshotTest } from '../../helpers/util.ts';

describe('Venn Diagram', () => {
  it('1: should render a simple two-set venn diagram', () => {
    imgSnapshotTest(
      `venn-beta
        set A
        set B
        union A, B
      `
    );
  });

  it('2: should render a three-set venn diagram', () => {
    imgSnapshotTest(
      `venn-beta
        set A
        set B
        set C
        union A, B
        union B, C
        union A, C
        union A, B, C
      `
    );
  });

  it('3: should render a venn diagram with a title', () => {
    imgSnapshotTest(
      `venn-beta
        title Skills Overlap
        set Frontend
        set Backend
        set DevOps
        union Frontend, Backend
        union Backend, DevOps
        union Frontend, DevOps
        union Frontend, Backend, DevOps
      `
    );
  });

  it('4: should render a venn diagram with custom set sizes', () => {
    imgSnapshotTest(
      `venn-beta
        set A size: 20
        set B size: 15
        set C size: 10
        union A, B size: 5
        union B, C size: 3
        union A, C size: 2
        union A, B, C size: 1
      `
    );
  });

  it('5: should render a venn diagram with labels', () => {
    imgSnapshotTest(
      `venn-beta
        title Team Skills
        set Frontend label: "Frontend"
        set Backend label: "Backend"
        union Frontend, Backend label: "Fullstack"
      `
    );
  });

  it('6: should render a venn diagram with text nodes', () => {
    imgSnapshotTest(
      `venn-beta
        set A
          text "Item 1"
          text "Item 2"
        set B
          text "Item 3"
        union A, B
          text "Shared"
      `
    );
  });

  it('7: should render a venn diagram with custom colors', () => {
    imgSnapshotTest(
      `venn-beta
        set A background: #ff6b6b
        set B background: #4ecdc4
        union A, B background: #ffe66d
      `
    );
  });

  it('8: should render a venn diagram with string identifiers', () => {
    imgSnapshotTest(
      `venn-beta
        title Programming Languages
        set "JavaScript"
        set "Python"
        set "TypeScript"
        union "JavaScript", "TypeScript"
      `
    );
  });

  it('9: should render with dark theme', () => {
    imgSnapshotTest(
      `venn-beta
        title Dark Theme
        set A
        set B
        set C
        union A, B
        union B, C
        union A, C
      `,
      { theme: 'dark' }
    );
  });

  it('10: should render a venn diagram with many text nodes', () => {
    imgSnapshotTest(
      `venn-beta
        title Fruits and Vegetables
        set Fruits
          text "Apple"
          text "Banana"
          text "Orange"
        set Vegetables
          text "Carrot"
          text "Broccoli"
        union Fruits, Vegetables
          text "Tomato"
      `
    );
  });

  it('11: should render a venn diagram with custom text colors', () => {
    imgSnapshotTest(
      `venn-beta
        set A
          text "Red Text" color: #ff0000
        set B
          text "Blue Text" color: #0000ff
        union A, B
          text "Green Text" color: #00ff00
      `
    );
  });

  it('12: should render a two-set venn with asymmetric sizes', () => {
    imgSnapshotTest(
      `venn-beta
        set A size: 30
        set B size: 10
        union A, B size: 5
      `
    );
  });

  it('13: should render a complex venn with labels, text nodes, and colors', () => {
    imgSnapshotTest(
      `venn-beta
        title Software Engineering Skills
        set Frontend label: "Frontend" background: #ff6b6b
          text "React"
          text "CSS"
          text "HTML"
        set Backend label: "Backend" background: #4ecdc4
          text "Node.js"
          text "SQL"
          text "APIs"
        set DevOps label: "DevOps" background: #45b7d1
          text "Docker"
          text "CI/CD"
        union Frontend, Backend label: "Fullstack"
          text "REST"
          text "GraphQL"
        union Backend, DevOps
          text "Monitoring"
        union Frontend, DevOps
          text "Performance"
        union Frontend, Backend, DevOps
          text "Architecture"
      `
    );
  });
});
