export default () => `
.tag {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background: #f5f7fa;
  border-radius: 290486px;
  color: #69707a;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 12px;
  height: 24px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  line-height: 16px;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: top;
  white-space: nowrap;
}

.tag .delete, .tag .modal-close {
  margin-left: 4px;
  margin-right: -6px;
}

.tag.is-white {
  background: #fff;
  color: #111;
}

.tag.is-black {
  background: #111;
  color: #fff;
}

.tag.is-light {
  background: #f5f7fa;
  color: #69707a;
}

.tag.is-dark {
  background: #69707a;
  color: #f5f7fa;
}

.tag.is-primary {
  background: #1fc8db;
  color: white;
}

.tag.is-info {
  background: #42afe3;
  color: white;
}

.tag.is-success {
  background: #97cd76;
  color: white;
}

.tag.is-warning {
  background: #fce473;
  color: rgba(17, 17, 17, 0.5);
}

.tag.is-danger {
  background: #ed6c63;
  color: white;
}

.tag.is-small {
  font-size: 11px;
  height: 20px;
  padding-left: 8px;
  padding-right: 8px;
}

.tag.is-medium {
  font-size: 14px;
  height: 32px;
  padding-left: 14px;
  padding-right: 14px;
}

.tag.is-large {
  font-size: 18px;
  height: 40px;
  line-height: 24px;
  padding-left: 18px;
  padding-right: 18px;
}

.tag.is-large .delete, .tag.is-large .modal-close {
  margin-left: 4px;
  margin-right: -8px;
}

/* delete */
.delete {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: rgba(17, 17, 17, 0.2);
  border: none;
  border-radius: 290486px;
  cursor: pointer;
  display: inline-block;
  height: 24px;
  position: relative;
  vertical-align: top;
  width: 24px;
}

.delete:before, .delete:after {
  background: #fff;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  margin-left: -25%;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  width: 50%;
}

.delete:before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.delete:after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.delete:hover {
  background: rgba(17, 17, 17, 0.5);
}

.delete.is-small, .tag:not(.is-large) .delete {
  height: 16px;
  width: 16px;
}

.delete.is-medium {
  height: 32px;
  width: 32px;
}

.delete.is-large {
  height: 40px;
  width: 40px;
}
`;
