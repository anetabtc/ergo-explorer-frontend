import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactModal from 'react-modal';

import { Asset } from '../../../models/generated/asset';

import { CrossIcon } from '../../common/icons/common.icons';
import { CoinValueComponent } from '../../common/coin-value/coin-value.component';

import './address-issued-tokens-modal.scss';

interface AddressIssuedTokensModalProps {
  isOpen: boolean;
  issuedTokens: Array<Asset> | undefined;
  onClose: () => void;
}

export class AddressIssuedTokensModalComponent extends React.PureComponent<
  AddressIssuedTokensModalProps
> {
  render(): JSX.Element {
    return (
      <ReactModal
        className="bi-address-issued-tokens-modal bi-modal bi-modal--scale"
        overlayClassName="bi-modal-overlay"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onClose}
      >
        <button className="bi-modal__btn-close" onClick={this.props.onClose}>
          <CrossIcon className="bi-modal__btn-close-icon" />
        </button>

        <div className="bi-address-issued-tokens-modal__table-header">
          <FormattedMessage id="components.address-issued-tokens.title" />
        </div>
        <div className="bi-address-issued-tokens-modal__container">
          <div className="bi-address-issued-tokens-modal__table-body bi-table">
            {this.props.issuedTokens &&
              this.props.issuedTokens.map((token: Asset, i: number) => {
                return (
                  <div
                    key={`${Math.random()} - ${i}`}
                    className="bi-address-issued-tokens-modal__row bi-table__row"
                  >
                    <div className="bi-address-issued-tokens-modal__cell bi-table__cell u-word-wrap u-word-wrap--ellipsis">
                      <FormattedMessage id={token.tokenId} />
                    </div>

                    <div className="bi-address-issued-tokens-modal__cell bi-table__cell">
                      <CoinValueComponent coinName={' '} value={token.amount} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </ReactModal>
    );
  }
}
