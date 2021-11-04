import { newSpecPage } from '@stencil/core/testing';
import { MinimalLiveViewport } from '@synchro-charts/core';
import { IotKpi } from './iot-kpi';
import { SECOND_IN_MS } from '../../utils/time';
import { getDataModule } from '../../data-module';
import { Components } from '../../components.d';
import { DATA_STREAM } from '../../testing/__mocks__/mockWidgetProperties';
import { CustomHTMLElement } from '../../utils/types';
import { SiteWiseDataStreamQuery } from '../../data-sources/site-wise/types.d';
import { update } from '../../common/tests/merge';
import { IotConnector } from '../../common/iot-connector';
import { createMockSource } from '../../testing/testing-ground/createMockSource';

const viewport: MinimalLiveViewport = {
  duration: SECOND_IN_MS,
};

const kpiSpecPage = async (propOverrides: Partial<Components.IotKpi> = {}) => {
  getDataModule().registerDataSource(createMockSource([DATA_STREAM]));

  const page = await newSpecPage({
    components: [IotKpi, IotConnector],
    html: '<div></div>',
    supportsShadowDom: false,
  });
  const kpi = page.doc.createElement('iot-kpi') as CustomHTMLElement<Components.IotKpi>;
  const props: Partial<Components.IotKpi> = {
    widgetId: 'test-kpi-widget',
    isEditing: false,
    query: {
      source: 'test-mock',
      assets: [{ assetId: 'some-asset-id', propertyIds: ['some-property-id'] }],
    } as SiteWiseDataStreamQuery, // static casting because of legacy sw
    viewport,
    ...propOverrides,
  };
  update(kpi, props);
  page.body.appendChild(kpi);

  await page.waitForChanges();

  return { page, kpi };
};

it('renders', async () => {
  const { kpi } = await kpiSpecPage();
  const scKpi = kpi.querySelectorAll('sc-kpi');
  expect(scKpi.length).toBe(1);
});
