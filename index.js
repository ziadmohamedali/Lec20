.admin-wishlist-container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    font-family: "Inter", sans-serif;
    color: #3A3845;
}

/* ========================================================
   1. TOP OPERATIONAL ACTION CONTROL BAR
   ======================================================== */
.management-control-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(202, 201, 207, 0.4);
    padding-bottom: 24px;
    margin-bottom: 32px;
}

.panel-tag {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #807F86;
}

.management-control-panel h3 {
    font-family: "EB Garamond", serif;
    font-size: 32px;
    margin: 4px 0 0 0;
}

.action-button-group {
    display: flex;
    gap: 12px;
}

.ctrl-btn {
    border: none;
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.1s ease;
}

.btn-show { background: #3A3845; color: #FFFFFF; }
.btn-show:hover { background: #24232C; }
.btn-reset { background: #B22222; color: #FFFFFF; }
.btn-reset:hover { background: #901A1A; }
.ctrl-btn:active { transform: scale(0.97); }

/* ========================================================
   2. CORE WORKSPACE GRID BREAKDOWN
   ======================================================== */
.workspace-layout {
    display: flex;
    gap: 40px;
}

.form-card-wrapper {
    width: 340px;
    background: #FFFFFF;
    border: 1px solid rgba(202, 201, 207, 0.4);
    border-radius: 6px;
    padding: 24px;
    height: fit-content;
}

.form-card-wrapper h4, .display-stream-wrapper h4 {
    font-family: "EB Garamond", serif;
    font-size: 20px;
    margin: 0 0 20px 0;
}

.field-group {
    margin-bottom: 16px;
}

.field-group label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 6px;
}

.field-group input, .field-group select {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #C2C1C7;
    border-radius: 4px;
    font-size: 13px;
    background: #FFFFFF;
    box-sizing: border-box;
}

.field-group input:focus {
    outline: none;
    border-color: #3A3845;
}

.submit-action-btn {
    width: 100%;
    background: #4F7942;
    color: #FFFFFF;
    border: none;
    padding: 12px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    margin-top: 8px;
}

/* ========================================================
   3. RIGHT SIDE DYNAMIC VIEW STREAM & INLINE EDIT CARDS
   ======================================================== */
.display-stream-wrapper {
    flex: 1;
    transition: opacity 0.3s ease;
}

.live-metrics-bar {
    display: flex;
    gap: 20px;
    background: #FAF9F7;
    border: 1px solid rgba(202, 201, 207, 0.4);
    padding: 16px 24px;
    border-radius: 6px;
    margin-bottom: 24px;
}

.metric-node {
    display: flex;
    flex-direction: column;
}

.m-label { font-size: 11px; text-transform: uppercase; color: #807F86; }
.m-val { font-size: 18px; font-weight: 600; margin-top: 2px; }

/* Dynamic Generated Row Cards Layout */
.wishlist-dynamic-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.wishlist-item-row {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid rgba(202, 201, 207, 0.4);
    border-radius: 6px;
    padding: 16px;
    gap: 20px;
    animation: rowReveal 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes rowReveal {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.wishlist-item-row img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 4px;
    background: #FAF9F7;
}

.row-info-block {
    flex: 1;
}

.row-info-block h5 { font-size: 15px; margin: 0 0 4px 0; }
.row-info-block span { font-size: 13px; color: #807F86; font-weight: 500; }

/* Inline Inputs adjustments when edit class overrides row items */
.inline-edit-input {
    padding: 6px 10px;
    font-size: 13px;
    border: 1px solid #3A3845;
    border-radius: 4px;
    margin-bottom: 4px;
    display: block;
}

.row-actions-block {
    display: flex;
    gap: 8px;
}

/* Micro Inline Operation buttons */
.row-btn {
    border: none;
    padding: 8px 14px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
}
.r-edit { background: #FAF9F7; color: #3A3845; border: 1px solid #E5E4E6; }
.r-edit:hover { background: #E5E4E6; }
.r-del { background: rgba(178, 34, 34, 0.08); color: #B22222; }
.r-del:hover { background: rgba(178, 34, 34, 0.15); }
.r-save { background: #3A3845; color: #FFFFFF; }

@media (max-width: 992px) {
    .workspace-layout { flex-direction: column; }
    .form-card-wrapper { width: 100%; }
}
