'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">top-colleagues documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4d52d0658512b7441b2e6d3a0a6a2b3282b393a91d3810c934cd6ec7955b785169989181f77a41f9458e93280e88f722de58745a3ce1229cfff44189f4acf720"' : 'data-target="#xs-components-links-module-AppModule-4d52d0658512b7441b2e6d3a0a6a2b3282b393a91d3810c934cd6ec7955b785169989181f77a41f9458e93280e88f722de58745a3ce1229cfff44189f4acf720"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4d52d0658512b7441b2e6d3a0a6a2b3282b393a91d3810c934cd6ec7955b785169989181f77a41f9458e93280e88f722de58745a3ce1229cfff44189f4acf720"' :
                                            'id="xs-components-links-module-AppModule-4d52d0658512b7441b2e6d3a0a6a2b3282b393a91d3810c934cd6ec7955b785169989181f77a41f9458e93280e88f722de58745a3ce1229cfff44189f4acf720"' }>
                                            <li class="link">
                                                <a href="components/AddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColleguesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColleguesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Comp01Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Comp01Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Comp02Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Comp02Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-a668da277311f20fe7b6d7a762e11090cba72f8d493a291cc50666fb37b038f8f0daca67cf0e899d40f5945db8d5e54146c3185c70a2d1d485a40ffe1166631a"' : 'data-target="#xs-components-links-module-SharedModule-a668da277311f20fe7b6d7a762e11090cba72f8d493a291cc50666fb37b038f8f0daca67cf0e899d40f5945db8d5e54146c3185c70a2d1d485a40ffe1166631a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-a668da277311f20fe7b6d7a762e11090cba72f8d493a291cc50666fb37b038f8f0daca67cf0e899d40f5945db8d5e54146c3185c70a2d1d485a40ffe1166631a"' :
                                            'id="xs-components-links-module-SharedModule-a668da277311f20fe7b6d7a762e11090cba72f8d493a291cc50666fb37b038f8f0daca67cf0e899d40f5945db8d5e54146c3185c70a2d1d485a40ffe1166631a"' }>
                                            <li class="link">
                                                <a href="components/ColleagueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColleagueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColleagueListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColleagueListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CounterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CounterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LikeHateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LikeHateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VotingHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VotingHistoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-a668da277311f20fe7b6d7a762e11090cba72f8d493a291cc50666fb37b038f8f0daca67cf0e899d40f5945db8d5e54146c3185c70a2d1d485a40ffe1166631a"' : 'data-target="#xs-pipes-links-module-SharedModule-a668da277311f20fe7b6d7a762e11090cba72f8d493a291cc50666fb37b038f8f0daca67cf0e899d40f5945db8d5e54146c3185c70a2d1d485a40ffe1166631a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-a668da277311f20fe7b6d7a762e11090cba72f8d493a291cc50666fb37b038f8f0daca67cf0e899d40f5945db8d5e54146c3185c70a2d1d485a40ffe1166631a"' :
                                            'id="xs-pipes-links-module-SharedModule-a668da277311f20fe7b6d7a762e11090cba72f8d493a291cc50666fb37b038f8f0daca67cf0e899d40f5945db8d5e54146c3185c70a2d1d485a40ffe1166631a"' }>
                                            <li class="link">
                                                <a href="pipes/ScorePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScorePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeModule.html" data-type="entity-link" >WelcomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomeModule-c69d316fe4b861c3de62ecae5c1ccd994d44f199867d606ad8097693f65a82f3d20b0c26af9aa46e2292c9cb63fc681dcc6281f19d91db40bc000df9e9f48e6b"' : 'data-target="#xs-components-links-module-WelcomeModule-c69d316fe4b861c3de62ecae5c1ccd994d44f199867d606ad8097693f65a82f3d20b0c26af9aa46e2292c9cb63fc681dcc6281f19d91db40bc000df9e9f48e6b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomeModule-c69d316fe4b861c3de62ecae5c1ccd994d44f199867d606ad8097693f65a82f3d20b0c26af9aa46e2292c9cb63fc681dcc6281f19d91db40bc000df9e9f48e6b"' :
                                            'id="xs-components-links-module-WelcomeModule-c69d316fe4b861c3de62ecae5c1ccd994d44f199867d606ad8097693f65a82f3d20b0c26af9aa46e2292c9cb63fc681dcc6281f19d91db40bc000df9e9f48e6b"' }>
                                            <li class="link">
                                                <a href="components/WelcomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Personne.html" data-type="entity-link" >Personne</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ColleagueService.html" data-type="entity-link" >ColleagueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LikehateService.html" data-type="entity-link" >LikehateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceaService.html" data-type="entity-link" >ServiceaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VoteService.html" data-type="entity-link" >VoteService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Colleague.html" data-type="entity-link" >Colleague</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vote.html" data-type="entity-link" >Vote</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});