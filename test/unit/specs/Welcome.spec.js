import Welcome from 'src/components/Welcome';
import Help from '../helpers';

describe('Welcome component', () => {
    let component;

    beforeEach(() => {
        component = Help.bootstrapComponent(Welcome);
    });

    it('should render correct contents', () => {
        expect(component.$el.querySelector('.Welcome__title').textContent)
            .to
            .contain('Build something awesome!');
    });

    it('should have an attribute for the title message', () => {
        expect(component.msg)
            .to
            .equal('Build something awesome!');
    });
});
